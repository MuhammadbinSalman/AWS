import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import path = require('path');

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FirstStepStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const fn = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'hello.handler',
      code: lambda.Code.fromAsset('lambda'),
    });

    const res= new apigateway.LambdaRestApi(this, 'myapilambda', {
      handler: fn,
      proxy:false
    });
    const check=res.root.addResource("resource")
    check.addMethod("GET")
    const check2=res.root.addResource("Chelsea")
    check2.addMethod("POST")
    check2.addMethod("GET")
  }
}










