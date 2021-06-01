#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { EcrStack } from '../lib/ecr';
import { Lambda1Stack } from '../lib/lambda1';

const app = new cdk.App();
const _ecr = new EcrStack(app, 'EcrStack');
new Lambda1Stack(app, 'LambdaStack', {
    repository: _ecr.repository
});
