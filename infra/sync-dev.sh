#!/bin/bash

set -e

bucketName=$(pulumi stack output -s dev bucketName 2>/dev/null)

aws s3 sync --acl public-read --follow-symlinks --delete ../frontend/dist s3://"${bucketName}"

