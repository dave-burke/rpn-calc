import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'

const stack = pulumi.getStack()
const subDomain = stack === 'prod' ? 'rpn' : `rpn-${stack}`
const domain = `${subDomain}.superfun.link`

const siteBucket = new aws.s3.Bucket(domain, {
  bucket: domain,
  websiteDomain: domain,
  website: {
    indexDocument: 'index.html'
  }
})

export const bucketName = siteBucket.id
export const s3WebsiteUrl = siteBucket.websiteEndpoint

const hostedZone = aws.route53.getZone({
  name: 'superfun.link'
})

const record = new aws.route53.Record('rpn-calc', {
  zoneId: hostedZone.then(hostedZone => hostedZone.zoneId),
  name: domain,
  type: 'A',
  aliases: [{
    name: siteBucket.websiteDomain,
    zoneId: siteBucket.hostedZoneId,
    evaluateTargetHealth: true
  }]
})

export const recordId = record.id
