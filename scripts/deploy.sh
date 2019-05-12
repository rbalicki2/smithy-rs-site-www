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
