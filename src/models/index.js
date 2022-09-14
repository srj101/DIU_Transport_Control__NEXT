// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Route } = initSchema(schema);

export {
  Route
};