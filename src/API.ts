/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRouteInput = {
  id?: string | null,
  createdBy?: string | null,
  routeName: string,
  pickupPoints?: Array< string | null > | null,
  image?: string | null,
  _version?: number | null,
};

export type ModelRouteConditionInput = {
  createdBy?: ModelStringInput | null,
  routeName?: ModelStringInput | null,
  pickupPoints?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelRouteConditionInput | null > | null,
  or?: Array< ModelRouteConditionInput | null > | null,
  not?: ModelRouteConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Route = {
  __typename: "Route",
  id: string,
  createdBy?: string | null,
  routeName: string,
  pickupPoints?: Array< string | null > | null,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateRouteInput = {
  id: string,
  createdBy?: string | null,
  routeName?: string | null,
  pickupPoints?: Array< string | null > | null,
  image?: string | null,
  _version?: number | null,
};

export type DeleteRouteInput = {
  id: string,
  _version?: number | null,
};

export type CreateBusInput = {
  id?: string | null,
  createdBy?: string | null,
  name: string,
  image?: string | null,
  _version?: number | null,
};

export type ModelBusConditionInput = {
  createdBy?: ModelStringInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelBusConditionInput | null > | null,
  or?: Array< ModelBusConditionInput | null > | null,
  not?: ModelBusConditionInput | null,
};

export type Bus = {
  __typename: "Bus",
  id: string,
  createdBy?: string | null,
  name: string,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateBusInput = {
  id: string,
  createdBy?: string | null,
  name?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type DeleteBusInput = {
  id: string,
  _version?: number | null,
};

export type CreateDriverInput = {
  id?: string | null,
  name: string,
  licenseNumber: string,
  phone: string,
  licenseExpiry?: string | null,
  _version?: number | null,
};

export type ModelDriverConditionInput = {
  name?: ModelStringInput | null,
  licenseNumber?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  licenseExpiry?: ModelStringInput | null,
  and?: Array< ModelDriverConditionInput | null > | null,
  or?: Array< ModelDriverConditionInput | null > | null,
  not?: ModelDriverConditionInput | null,
};

export type Driver = {
  __typename: "Driver",
  id: string,
  name: string,
  licenseNumber: string,
  phone: string,
  licenseExpiry?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateDriverInput = {
  id: string,
  name?: string | null,
  licenseNumber?: string | null,
  phone?: string | null,
  licenseExpiry?: string | null,
  _version?: number | null,
};

export type DeleteDriverInput = {
  id: string,
  _version?: number | null,
};

export type CreateConductorInput = {
  id?: string | null,
  name: string,
  phone: string,
  _version?: number | null,
};

export type ModelConductorConditionInput = {
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelConductorConditionInput | null > | null,
  or?: Array< ModelConductorConditionInput | null > | null,
  not?: ModelConductorConditionInput | null,
};

export type Conductor = {
  __typename: "Conductor",
  id: string,
  name: string,
  phone: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateConductorInput = {
  id: string,
  name?: string | null,
  phone?: string | null,
  _version?: number | null,
};

export type DeleteConductorInput = {
  id: string,
  _version?: number | null,
};

export type CreateScheduleInput = {
  id?: string | null,
  name: string,
  time: string,
  day: string,
  _version?: number | null,
};

export type ModelScheduleConditionInput = {
  name?: ModelStringInput | null,
  time?: ModelStringInput | null,
  day?: ModelStringInput | null,
  and?: Array< ModelScheduleConditionInput | null > | null,
  or?: Array< ModelScheduleConditionInput | null > | null,
  not?: ModelScheduleConditionInput | null,
};

export type Schedule = {
  __typename: "Schedule",
  id: string,
  name: string,
  time: string,
  day: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateScheduleInput = {
  id: string,
  name?: string | null,
  time?: string | null,
  day?: string | null,
  _version?: number | null,
};

export type DeleteScheduleInput = {
  id: string,
  _version?: number | null,
};

export type CreateTicketInput = {
  id?: string | null,
  name: string,
  token: string,
  _version?: number | null,
};

export type ModelTicketConditionInput = {
  name?: ModelStringInput | null,
  token?: ModelStringInput | null,
  and?: Array< ModelTicketConditionInput | null > | null,
  or?: Array< ModelTicketConditionInput | null > | null,
  not?: ModelTicketConditionInput | null,
};

export type Ticket = {
  __typename: "Ticket",
  id: string,
  name: string,
  token: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTicketInput = {
  id: string,
  name?: string | null,
  token?: string | null,
  _version?: number | null,
};

export type DeleteTicketInput = {
  id: string,
  _version?: number | null,
};

export type ModelRouteFilterInput = {
  id?: ModelIDInput | null,
  createdBy?: ModelStringInput | null,
  routeName?: ModelStringInput | null,
  pickupPoints?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelRouteFilterInput | null > | null,
  or?: Array< ModelRouteFilterInput | null > | null,
  not?: ModelRouteFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRouteConnection = {
  __typename: "ModelRouteConnection",
  items:  Array<Route | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBusFilterInput = {
  id?: ModelIDInput | null,
  createdBy?: ModelStringInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelBusFilterInput | null > | null,
  or?: Array< ModelBusFilterInput | null > | null,
  not?: ModelBusFilterInput | null,
};

export type ModelBusConnection = {
  __typename: "ModelBusConnection",
  items:  Array<Bus | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDriverFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  licenseNumber?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  licenseExpiry?: ModelStringInput | null,
  and?: Array< ModelDriverFilterInput | null > | null,
  or?: Array< ModelDriverFilterInput | null > | null,
  not?: ModelDriverFilterInput | null,
};

export type ModelDriverConnection = {
  __typename: "ModelDriverConnection",
  items:  Array<Driver | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelConductorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelConductorFilterInput | null > | null,
  or?: Array< ModelConductorFilterInput | null > | null,
  not?: ModelConductorFilterInput | null,
};

export type ModelConductorConnection = {
  __typename: "ModelConductorConnection",
  items:  Array<Conductor | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelScheduleFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  time?: ModelStringInput | null,
  day?: ModelStringInput | null,
  and?: Array< ModelScheduleFilterInput | null > | null,
  or?: Array< ModelScheduleFilterInput | null > | null,
  not?: ModelScheduleFilterInput | null,
};

export type ModelScheduleConnection = {
  __typename: "ModelScheduleConnection",
  items:  Array<Schedule | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTicketFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  token?: ModelStringInput | null,
  and?: Array< ModelTicketFilterInput | null > | null,
  or?: Array< ModelTicketFilterInput | null > | null,
  not?: ModelTicketFilterInput | null,
};

export type ModelTicketConnection = {
  __typename: "ModelTicketConnection",
  items:  Array<Ticket | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateRouteMutationVariables = {
  input: CreateRouteInput,
  condition?: ModelRouteConditionInput | null,
};

export type CreateRouteMutation = {
  createRoute?:  {
    __typename: "Route",
    id: string,
    createdBy?: string | null,
    routeName: string,
    pickupPoints?: Array< string | null > | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRouteMutationVariables = {
  input: UpdateRouteInput,
  condition?: ModelRouteConditionInput | null,
};

export type UpdateRouteMutation = {
  updateRoute?:  {
    __typename: "Route",
    id: string,
    createdBy?: string | null,
    routeName: string,
    pickupPoints?: Array< string | null > | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRouteMutationVariables = {
  input: DeleteRouteInput,
  condition?: ModelRouteConditionInput | null,
};

export type DeleteRouteMutation = {
  deleteRoute?:  {
    __typename: "Route",
    id: string,
    createdBy?: string | null,
    routeName: string,
    pickupPoints?: Array< string | null > | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBusMutationVariables = {
  input: CreateBusInput,
  condition?: ModelBusConditionInput | null,
};

export type CreateBusMutation = {
  createBus?:  {
    __typename: "Bus",
    id: string,
    createdBy?: string | null,
    name: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBusMutationVariables = {
  input: UpdateBusInput,
  condition?: ModelBusConditionInput | null,
};

export type UpdateBusMutation = {
  updateBus?:  {
    __typename: "Bus",
    id: string,
    createdBy?: string | null,
    name: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBusMutationVariables = {
  input: DeleteBusInput,
  condition?: ModelBusConditionInput | null,
};

export type DeleteBusMutation = {
  deleteBus?:  {
    __typename: "Bus",
    id: string,
    createdBy?: string | null,
    name: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDriverMutationVariables = {
  input: CreateDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type CreateDriverMutation = {
  createDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    licenseNumber: string,
    phone: string,
    licenseExpiry?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDriverMutationVariables = {
  input: UpdateDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type UpdateDriverMutation = {
  updateDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    licenseNumber: string,
    phone: string,
    licenseExpiry?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDriverMutationVariables = {
  input: DeleteDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type DeleteDriverMutation = {
  deleteDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    licenseNumber: string,
    phone: string,
    licenseExpiry?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateConductorMutationVariables = {
  input: CreateConductorInput,
  condition?: ModelConductorConditionInput | null,
};

export type CreateConductorMutation = {
  createConductor?:  {
    __typename: "Conductor",
    id: string,
    name: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateConductorMutationVariables = {
  input: UpdateConductorInput,
  condition?: ModelConductorConditionInput | null,
};

export type UpdateConductorMutation = {
  updateConductor?:  {
    __typename: "Conductor",
    id: string,
    name: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteConductorMutationVariables = {
  input: DeleteConductorInput,
  condition?: ModelConductorConditionInput | null,
};

export type DeleteConductorMutation = {
  deleteConductor?:  {
    __typename: "Conductor",
    id: string,
    name: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateScheduleMutationVariables = {
  input: CreateScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type CreateScheduleMutation = {
  createSchedule?:  {
    __typename: "Schedule",
    id: string,
    name: string,
    time: string,
    day: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateScheduleMutationVariables = {
  input: UpdateScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type UpdateScheduleMutation = {
  updateSchedule?:  {
    __typename: "Schedule",
    id: string,
    name: string,
    time: string,
    day: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteScheduleMutationVariables = {
  input: DeleteScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type DeleteScheduleMutation = {
  deleteSchedule?:  {
    __typename: "Schedule",
    id: string,
    name: string,
    time: string,
    day: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTicketMutationVariables = {
  input: CreateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type CreateTicketMutation = {
  createTicket?:  {
    __typename: "Ticket",
    id: string,
    name: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTicketMutationVariables = {
  input: UpdateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type UpdateTicketMutation = {
  updateTicket?:  {
    __typename: "Ticket",
    id: string,
    name: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTicketMutationVariables = {
  input: DeleteTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type DeleteTicketMutation = {
  deleteTicket?:  {
    __typename: "Ticket",
    id: string,
    name: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetRouteQueryVariables = {
  id: string,
};

export type GetRouteQuery = {
  getRoute?:  {
    __typename: "Route",
    id: string,
    createdBy?: string | null,
    routeName: string,
    pickupPoints?: Array< string | null > | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRoutesQueryVariables = {
  filter?: ModelRouteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoutesQuery = {
  listRoutes?:  {
    __typename: "ModelRouteConnection",
    items:  Array< {
      __typename: "Route",
      id: string,
      createdBy?: string | null,
      routeName: string,
      pickupPoints?: Array< string | null > | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRoutesQueryVariables = {
  filter?: ModelRouteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRoutesQuery = {
  syncRoutes?:  {
    __typename: "ModelRouteConnection",
    items:  Array< {
      __typename: "Route",
      id: string,
      createdBy?: string | null,
      routeName: string,
      pickupPoints?: Array< string | null > | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBusQueryVariables = {
  id: string,
};

export type GetBusQuery = {
  getBus?:  {
    __typename: "Bus",
    id: string,
    createdBy?: string | null,
    name: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBusesQueryVariables = {
  filter?: ModelBusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusesQuery = {
  listBuses?:  {
    __typename: "ModelBusConnection",
    items:  Array< {
      __typename: "Bus",
      id: string,
      createdBy?: string | null,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBusesQueryVariables = {
  filter?: ModelBusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBusesQuery = {
  syncBuses?:  {
    __typename: "ModelBusConnection",
    items:  Array< {
      __typename: "Bus",
      id: string,
      createdBy?: string | null,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDriverQueryVariables = {
  id: string,
};

export type GetDriverQuery = {
  getDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    licenseNumber: string,
    phone: string,
    licenseExpiry?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDriversQueryVariables = {
  filter?: ModelDriverFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDriversQuery = {
  listDrivers?:  {
    __typename: "ModelDriverConnection",
    items:  Array< {
      __typename: "Driver",
      id: string,
      name: string,
      licenseNumber: string,
      phone: string,
      licenseExpiry?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDriversQueryVariables = {
  filter?: ModelDriverFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDriversQuery = {
  syncDrivers?:  {
    __typename: "ModelDriverConnection",
    items:  Array< {
      __typename: "Driver",
      id: string,
      name: string,
      licenseNumber: string,
      phone: string,
      licenseExpiry?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetConductorQueryVariables = {
  id: string,
};

export type GetConductorQuery = {
  getConductor?:  {
    __typename: "Conductor",
    id: string,
    name: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListConductorsQueryVariables = {
  filter?: ModelConductorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConductorsQuery = {
  listConductors?:  {
    __typename: "ModelConductorConnection",
    items:  Array< {
      __typename: "Conductor",
      id: string,
      name: string,
      phone: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncConductorsQueryVariables = {
  filter?: ModelConductorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncConductorsQuery = {
  syncConductors?:  {
    __typename: "ModelConductorConnection",
    items:  Array< {
      __typename: "Conductor",
      id: string,
      name: string,
      phone: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetScheduleQueryVariables = {
  id: string,
};

export type GetScheduleQuery = {
  getSchedule?:  {
    __typename: "Schedule",
    id: string,
    name: string,
    time: string,
    day: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSchedulesQueryVariables = {
  filter?: ModelScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSchedulesQuery = {
  listSchedules?:  {
    __typename: "ModelScheduleConnection",
    items:  Array< {
      __typename: "Schedule",
      id: string,
      name: string,
      time: string,
      day: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSchedulesQueryVariables = {
  filter?: ModelScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSchedulesQuery = {
  syncSchedules?:  {
    __typename: "ModelScheduleConnection",
    items:  Array< {
      __typename: "Schedule",
      id: string,
      name: string,
      time: string,
      day: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTicketQueryVariables = {
  id: string,
};

export type GetTicketQuery = {
  getTicket?:  {
    __typename: "Ticket",
    id: string,
    name: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTicketsQueryVariables = {
  filter?: ModelTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTicketsQuery = {
  listTickets?:  {
    __typename: "ModelTicketConnection",
    items:  Array< {
      __typename: "Ticket",
      id: string,
      name: string,
      token: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTicketsQueryVariables = {
  filter?: ModelTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTicketsQuery = {
  syncTickets?:  {
    __typename: "ModelTicketConnection",
    items:  Array< {
      __typename: "Ticket",
      id: string,
      name: string,
      token: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateRouteSubscription = {
  onCreateRoute?:  {
    __typename: "Route",
    id: string,
    createdBy?: string | null,
    routeName: string,
    pickupPoints?: Array< string | null > | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRouteSubscription = {
  onUpdateRoute?:  {
    __typename: "Route",
    id: string,
    createdBy?: string | null,
    routeName: string,
    pickupPoints?: Array< string | null > | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRouteSubscription = {
  onDeleteRoute?:  {
    __typename: "Route",
    id: string,
    createdBy?: string | null,
    routeName: string,
    pickupPoints?: Array< string | null > | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBusSubscription = {
  onCreateBus?:  {
    __typename: "Bus",
    id: string,
    createdBy?: string | null,
    name: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBusSubscription = {
  onUpdateBus?:  {
    __typename: "Bus",
    id: string,
    createdBy?: string | null,
    name: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBusSubscription = {
  onDeleteBus?:  {
    __typename: "Bus",
    id: string,
    createdBy?: string | null,
    name: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDriverSubscription = {
  onCreateDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    licenseNumber: string,
    phone: string,
    licenseExpiry?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDriverSubscription = {
  onUpdateDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    licenseNumber: string,
    phone: string,
    licenseExpiry?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDriverSubscription = {
  onDeleteDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    licenseNumber: string,
    phone: string,
    licenseExpiry?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateConductorSubscription = {
  onCreateConductor?:  {
    __typename: "Conductor",
    id: string,
    name: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateConductorSubscription = {
  onUpdateConductor?:  {
    __typename: "Conductor",
    id: string,
    name: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteConductorSubscription = {
  onDeleteConductor?:  {
    __typename: "Conductor",
    id: string,
    name: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateScheduleSubscription = {
  onCreateSchedule?:  {
    __typename: "Schedule",
    id: string,
    name: string,
    time: string,
    day: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateScheduleSubscription = {
  onUpdateSchedule?:  {
    __typename: "Schedule",
    id: string,
    name: string,
    time: string,
    day: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteScheduleSubscription = {
  onDeleteSchedule?:  {
    __typename: "Schedule",
    id: string,
    name: string,
    time: string,
    day: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTicketSubscription = {
  onCreateTicket?:  {
    __typename: "Ticket",
    id: string,
    name: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTicketSubscription = {
  onUpdateTicket?:  {
    __typename: "Ticket",
    id: string,
    name: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTicketSubscription = {
  onDeleteTicket?:  {
    __typename: "Ticket",
    id: string,
    name: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
