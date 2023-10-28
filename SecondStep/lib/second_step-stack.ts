import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as AWSkaLambda from 'aws-cdk-lib/aws-lambda'
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class SecondStepStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new AWSkaLambda.Function(this, 'Step2', {
      runtime: AWSkaLambda.Runtime.NODEJS_18_X,
      handler: 'handle.handler',
      code: AWSkaLambda.Code.fromAsset('lambda'),
    });
    const res = new apigateway.LambdaRestApi(this, 'myStep2API', {
      handler: fn,
      proxy: false
    });
    const check = res.root.addResource("suiii")
    check.addMethod("GET")
    check.addMethod("POST")
  }
}
