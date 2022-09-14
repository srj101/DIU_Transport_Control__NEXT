/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRouteInput = {
  id?: string | null,
  createdBy?: string | null,
  routeName: string,
  pickupPoints?: Array< string | null > | null,
  image?: string | null,
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
};

export type UpdateRouteInput = {
  id: string,
  createdBy?: string | null,
  routeName?: string | null,
  pickupPoints?: Array< string | null > | null,
  image?: string | null,
};

export type DeleteRouteInput = {
  id: string,
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
    } | null >,
    nextToken?: string | null,
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
  } | null,
};
