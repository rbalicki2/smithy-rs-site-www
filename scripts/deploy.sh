GITHASH=${CIRCLE_SHA1:-$(git rev-parse HEAD)}
export NODE_ENV=production
export S3_BUCKET=smithy-rs-site/www
S3_BUCKET_FOLDER=$NODE_ENV

echo "***** About to deploy build to $S3_BUCKET/$S3_BUCKET_FOLDER"

aws s3 sync \
  s3://$S3_BUCKET/$S3_BUCKET_FOLDER/builds/$GITHASH \
  s3://$S3_BUCKET/$S3_BUCKET_FOLDER/current \
  --delete \
  --acl public-read

echo "***** Invalidating cache"

DISTRIBUTIONS=$(aws cloudfront list-distributions);
ARNS=$(echo "$DISTRIBUTIONS" | jq -r '.DistributionList.Items[].ARN')
IDS=$(echo "$DISTRIBUTIONS" | jq -r '.DistributionList.Items[].Id')

LINE=1
HAS_INVALIDATION_KEYS=false
while read -r ARN; do
  # list tags for each resource (whose ARN we got above)
  # filter for tags that are .Key == "project" and .Value == "smithy-www"
  # or .Key == "env" and .Value === "your deploy env"
  # and grab the length. If this is 2, we have a match.
  KEYS_FOUND=$(aws cloudfront list-tags-for-resource --resource $ARN \
    | jq '.Tags.Items | map(select((.Value == "'$S3_BUCKET_FOLDER'" and .Key == "env") or (.Value == "smithy-www" and .Key == "project"))) | length')


  if [ $? -ne 0 ]; then
    echo "***** Failed deploying build to $S3_BUCKET/$S3_BUCKET_FOLDER"
    exit 1
  fi

  KEYS_FOUND=${KEYS_FOUND:-0}
  if [ $KEYS_FOUND = "2" ]; then
    HAS_INVALIDATION_KEYS=true
    # look up the ID by the LINE number
    ID=$(sed -n ${LINE}p <<< "$IDS")
    # and invalidate that distribution
    aws cloudfront create-invalidation --distribution-id $ID --paths '/*'

    if [ $? -ne 0 ]; then
      echo "***** Failed invalidating cloudfront to $S3_BUCKET/$S3_BUCKET_FOLDER"
      exit 1
    fi
  fi
  LINE=$((LINE + 1))
done <<< "$ARNS"

if [ "$HAS_INVALIDATION_KEYS" = false ]; then
  echo "***** Required keys 'project' and 'deploy_env' not found for invalidating cloudfront"
  exit 1
fi