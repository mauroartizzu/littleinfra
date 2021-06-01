import * as cdk from '@aws-cdk/core';
import * as ecr from '@aws-cdk/aws-ecr';

export interface RepositoryStackProps extends cdk.StackProps {
  repository: ecr.IRepository;
}

export class EcrStack extends cdk.Stack {

  public readonly repository: ecr.IRepository;

  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.repository = new ecr.Repository(this, 'repository');
  }
}
