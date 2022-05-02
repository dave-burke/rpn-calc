#!/bin/bash

set -e

cd infra
pulumi stack select dev
pulumi up -y
bucketName=$(pulumi stack output -s dev bucketName 2>/dev/null)

cd ../frontend

aws s3 sync --acl public-read --follow-symlinks --delete dist s3://"${bucketName}"

