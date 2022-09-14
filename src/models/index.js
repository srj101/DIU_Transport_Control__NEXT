// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Route, Schedule, Bus, Driver, Conductor, Ticket } = initSchema(schema);

export {
  Route,
  Schedule,
  Bus,
  Driver,
  Conductor,
  Ticket
};