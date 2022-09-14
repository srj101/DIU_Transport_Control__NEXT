import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RouteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DriverMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConductorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TicketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Route {
  readonly id: string;
  readonly routeName: string;
  readonly pickupPoints?: (string | null)[] | null;
  readonly image?: string | null;
  readonly Schedules?: (Schedule | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Route, RouteMetaData>);
  static copyOf(source: Route, mutator: (draft: MutableModel<Route, RouteMetaData>) => MutableModel<Route, RouteMetaData> | void): Route;
}

export declare class Schedule {
  readonly id: string;
  readonly name: string;
  readonly time: string;
  readonly type?: string | null;
  readonly day: string;
  readonly routeID: string;
  readonly Buses?: (Bus | null)[] | null;
  readonly Drivers?: (Driver | null)[] | null;
  readonly Conductors?: (Conductor | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Schedule, ScheduleMetaData>);
  static copyOf(source: Schedule, mutator: (draft: MutableModel<Schedule, ScheduleMetaData>) => MutableModel<Schedule, ScheduleMetaData> | void): Schedule;
}

export declare class Bus {
  readonly id: string;
  readonly createdBy?: string | null;
  readonly name: string;
  readonly image?: string | null;
  readonly scheduleID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Bus, BusMetaData>);
  static copyOf(source: Bus, mutator: (draft: MutableModel<Bus, BusMetaData>) => MutableModel<Bus, BusMetaData> | void): Bus;
}

export declare class Driver {
  readonly id: string;
  readonly name: string;
  readonly licenseNumber: string;
  readonly phone: string;
  readonly licenseExpiry?: string | null;
  readonly scheduleID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Driver, DriverMetaData>);
  static copyOf(source: Driver, mutator: (draft: MutableModel<Driver, DriverMetaData>) => MutableModel<Driver, DriverMetaData> | void): Driver;
}

export declare class Conductor {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly scheduleID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Conductor, ConductorMetaData>);
  static copyOf(source: Conductor, mutator: (draft: MutableModel<Conductor, ConductorMetaData>) => MutableModel<Conductor, ConductorMetaData> | void): Conductor;
}

export declare class Ticket {
  readonly id: string;
  readonly name: string;
  readonly token: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ticket, TicketMetaData>);
  static copyOf(source: Ticket, mutator: (draft: MutableModel<Ticket, TicketMetaData>) => MutableModel<Ticket, TicketMetaData> | void): Ticket;
}