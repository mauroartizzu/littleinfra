import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as _ecr from '../lib/ecr';
import * as _lambda1 from '../lib/lambda1';

test('Lambda Created', () => {
  
    const app = new cdk.App();

    const ecrStack = new _ecr.EcrStack(app, 'MyEcrTestStack');
    
    const lambda1Stack = new _lambda1.Lambda1Stack(app, 'MyLambdaTestStack', {
      repository: ecrStack.repository
    });
    
    expectCDK(lambda1Stack).to(haveResource("AWS::Lambda::Function"));
});
