// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Schedule, Route, RouteImage, Bus, Driver, Conductor, BusImage, Ticket } = initSchema(schema);

export {
  Schedule,
  Route,
  RouteImage,
  Bus,
  Driver,
  Conductor,
  BusImage,
  Ticket
};