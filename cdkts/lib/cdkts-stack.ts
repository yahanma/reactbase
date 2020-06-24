import * as cdk from '@aws-cdk/core';
//import s3 = require('@aws-cdk/aws-s3');
//import s3deploy = require('@aws-cdk/aws-s3-deployment');
import * as s3 from '@aws-cdk/aws-s3';
import * as s3deploy from '@aws-cdk/aws-s3-deployment';

export class CdktsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //s3
    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true
    });
    //s3 deployment
    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      //sources: [s3deploy.Source.asset('./website-dist')],
      sources: [s3deploy.Source.asset('d:/coding/reactbase/build')],//if build from react
      //sources: [s3deploy.Source.asset('build.zip')],
      //if build from react,zip the file and copy to cdk folder
      destinationBucket: websiteBucket,
    });  
  }
}
