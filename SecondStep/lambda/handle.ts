import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  console.log("request:", JSON.stringify(event, undefined, 2));

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, nigga! You've hit ${event.path}\n`
  };
}























// const hello = new lambda.Function(this, "HelloHandler", {
//     runtime: lambda.Runtime.NODEJS_10_X,
//     code: lambda.Code.fromAsset("lambda"),
//     handler: "hello.handler",
//   });
