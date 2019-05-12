export NODE_ENV=production
export S3_BUCKET=smithy-rs-site/www
S3_BUCKET_FOLDER=$NODE_ENV

echo "***** About to upload build to $S3_BUCKET/$S3_BUCKET_FOLDER"
# copy all of the files to aws
aws s3 cp ./out/_next s3://$S3_BUCKET/$S3_BUCKET_FOLDER/_next \
  --cache-control immutable,max-age=100000000,public \
  --acl public-read \
  --recursive

aws s3 cp ./static/ s3://$S3_BUCKET/$S3_BUCKET_FOLDER/static/ \
  --cache-control immutable,max-age=100000000,public \
  --acl public-read \
  --recursive

aws s3 cp ./out/builds s3://$S3_BUCKET/$S3_BUCKET_FOLDER/builds \
  --cache-control immutable,max-age=100000000,public \
  --acl public-read \
  --recursive
