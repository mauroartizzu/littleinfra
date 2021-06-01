#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { EcrStack } from '../lib/ecr';

const app = new cdk.App();
new EcrStack(app, 'EcrStack');
