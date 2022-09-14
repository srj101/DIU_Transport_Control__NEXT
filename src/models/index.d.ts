import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RouteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Route {
  readonly id: string;
  readonly createdBy?: string | null;
  readonly routeName: string;
  readonly pickupPoints?: (string | null)[] | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Route, RouteMetaData>);
  static copyOf(source: Route, mutator: (draft: MutableModel<Route, RouteMetaData>) => MutableModel<Route, RouteMetaData> | void): Route;
}