import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as _ecr from '../lib/ecr';

test('ECR Repository Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new _ecr.EcrStack(app, 'MyEcrTestStack');
    // THEN
    expectCDK(stack).to(haveResource("AWS::ECR::Repository"));
});
