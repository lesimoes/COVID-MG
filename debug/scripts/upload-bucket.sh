BUCKET_NAME=$1

aws \
--endpoint-url=http://localhost:4572 cp ./notificacoes-covid19-mg-dev.csv s3://$BUCKET_NAME