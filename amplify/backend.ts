import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data, helloWorld } from './data/resource';

const backend = defineBackend({
  auth,
  data,
  helloWorld,
});

backend.addOutput({
  custom: {
    helloWorldFunctionName: backend.helloWorld.resources.lambda.functionName,
  },
});
