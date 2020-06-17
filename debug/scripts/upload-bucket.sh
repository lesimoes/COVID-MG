BUCKET_NAME=$1

# aws \
# --endpoint-url=http://localhost:4572
aws s3 cp ./debug/scripts/notificacoes-covid19-mg-dev.csv s3://$BUCKET_NAME