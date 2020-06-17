BUCKET_NAME=$1

aws \
  --endpoint-url=http://localhost:4572 s3 ls s3://$BUCKET_NAME