// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HydrationActivity, User } = initSchema(schema);

export {
  HydrationActivity,
  User
};