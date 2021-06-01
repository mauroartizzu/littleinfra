import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as _ecr from '../ecr';

export class Lambda1Stack extends cdk.Stack {

  constructor(scope: cdk.App, id: string, props: _ecr.RepositoryStackProps) {
    super(scope, id, props);

    const lambda1 = new lambda.Function(this, 'lambda1', {
      runtime: lambda.Runtime.FROM_IMAGE,
      handler: lambda.Handler.FROM_IMAGE,
      code: lambda.Code.fromEcrImage(props.repository)
    })
  }
}
