/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSchedule = /* GraphQL */ `
  mutation CreateSchedule(
    $input: CreateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    createSchedule(input: $input, condition: $condition) {
      id
      name
      time
      type
      day
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        Schedules {
          nextToken
          startedAt
        }
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSchedule = /* GraphQL */ `
  mutation UpdateSchedule(
    $input: UpdateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    updateSchedule(input: $input, condition: $condition) {
      id
      name
      time
      type
      day
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        Schedules {
          nextToken
          startedAt
        }
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSchedule = /* GraphQL */ `
  mutation DeleteSchedule(
    $input: DeleteScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    deleteSchedule(input: $input, condition: $condition) {
      id
      name
      time
      type
      day
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        Schedules {
          nextToken
          startedAt
        }
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createBus = /* GraphQL */ `
  mutation CreateBus(
    $input: CreateBusInput!
    $condition: ModelBusConditionInput
  ) {
    createBus(input: $input, condition: $condition) {
      id
      name
      status_on
      Driver {
        id
        name
        licenseNumber
        phone
        licenseExpiry
        Bus {
          id
          name
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        driverBusId
      }
      Conductor {
        id
        name
        phone
        Bus {
          id
          name
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conductorBusId
      }
      BusImages {
        items {
          id
          tags
          caption
          url
          busID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        Schedules {
          nextToken
          startedAt
        }
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      busDriverId
      busConductorId
    }
  }
`;
export const updateBus = /* GraphQL */ `
  mutation UpdateBus(
    $input: UpdateBusInput!
    $condition: ModelBusConditionInput
  ) {
    updateBus(input: $input, condition: $condition) {
      id
      name
      status_on
      Driver {
        id
        name
        licenseNumber
        phone
        licenseExpiry
        Bus {
          id
          name
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        driverBusId
      }
      Conductor {
        id
        name
        phone
        Bus {
          id
          name
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conductorBusId
      }
      BusImages {
        items {
          id
          tags
          caption
          url
          busID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        Schedules {
          nextToken
          startedAt
        }
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      busDriverId
      busConductorId
    }
  }
`;
export const deleteBus = /* GraphQL */ `
  mutation DeleteBus(
    $input: DeleteBusInput!
    $condition: ModelBusConditionInput
  ) {
    deleteBus(input: $input, condition: $condition) {
      id
      name
      status_on
      Driver {
        id
        name
        licenseNumber
        phone
        licenseExpiry
        Bus {
          id
          name
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        driverBusId
      }
      Conductor {
        id
        name
        phone
        Bus {
          id
          name
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conductorBusId
      }
      BusImages {
        items {
          id
          tags
          caption
          url
          busID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        Schedules {
          nextToken
          startedAt
        }
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      busDriverId
      busConductorId
    }
  }
`;
export const createRoute = /* GraphQL */ `
  mutation CreateRoute(
    $input: CreateRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    createRoute(input: $input, condition: $condition) {
      id
      routeName
      pickupPoints
      image
      Schedules {
        items {
          id
          name
          time
          type
          day
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      RouteImages {
        items {
          id
          url
          tags
          caption
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Buses {
        items {
          id
          name
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateRoute = /* GraphQL */ `
  mutation UpdateRoute(
    $input: UpdateRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    updateRoute(input: $input, condition: $condition) {
      id
      routeName
      pickupPoints
      image
      Schedules {
        items {
          id
          name
          time
          type
          day
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      RouteImages {
        items {
          id
          url
          tags
          caption
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Buses {
        items {
          id
          name
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteRoute = /* GraphQL */ `
  mutation DeleteRoute(
    $input: DeleteRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    deleteRoute(input: $input, condition: $condition) {
      id
      routeName
      pickupPoints
      image
      Schedules {
        items {
          id
          name
          time
          type
          day
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      RouteImages {
        items {
          id
          url
          tags
          caption
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Buses {
        items {
          id
          name
          status_on
          routeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createRouteImage = /* GraphQL */ `
  mutation CreateRouteImage(
    $input: CreateRouteImageInput!
    $condition: ModelRouteImageConditionInput
  ) {
    createRouteImage(input: $input, condition: $condition) {
      id
      url
      tags
      caption
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        Schedules {
          nextToken
          startedAt
        }
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateRouteImage = /* GraphQL */ `
  mutation UpdateRouteImage(
    $input: UpdateRouteImageInput!
    $condition: ModelRouteImageConditionInput
  ) {
    updateRouteImage(input: $input, condition: $condition) {
      id
      url
      tags
      caption
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        Schedules {
          nextToken
          startedAt
        }
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteRouteImage = /* GraphQL */ `
  mutation DeleteRouteImage(
    $input: DeleteRouteImageInput!
    $condition: ModelRouteImageConditionInput
  ) {
    deleteRouteImage(input: $input, condition: $condition) {
      id
      url
      tags
      caption
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        Schedules {
          nextToken
          startedAt
        }
        RouteImages {
          nextToken
          startedAt
        }
        Buses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createBusImage = /* GraphQL */ `
  mutation CreateBusImage(
    $input: CreateBusImageInput!
    $condition: ModelBusImageConditionInput
  ) {
    createBusImage(input: $input, condition: $condition) {
      id
      tags
      caption
      url
      busID
      Bus {
        id
        name
        status_on
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        routeID
        Route {
          id
          routeName
          pickupPoints
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBusImage = /* GraphQL */ `
  mutation UpdateBusImage(
    $input: UpdateBusImageInput!
    $condition: ModelBusImageConditionInput
  ) {
    updateBusImage(input: $input, condition: $condition) {
      id
      tags
      caption
      url
      busID
      Bus {
        id
        name
        status_on
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        routeID
        Route {
          id
          routeName
          pickupPoints
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBusImage = /* GraphQL */ `
  mutation DeleteBusImage(
    $input: DeleteBusImageInput!
    $condition: ModelBusImageConditionInput
  ) {
    deleteBusImage(input: $input, condition: $condition) {
      id
      tags
      caption
      url
      busID
      Bus {
        id
        name
        status_on
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        routeID
        Route {
          id
          routeName
          pickupPoints
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createDriver = /* GraphQL */ `
  mutation CreateDriver(
    $input: CreateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    createDriver(input: $input, condition: $condition) {
      id
      name
      licenseNumber
      phone
      licenseExpiry
      Bus {
        id
        name
        status_on
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        routeID
        Route {
          id
          routeName
          pickupPoints
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      driverBusId
    }
  }
`;
export const updateDriver = /* GraphQL */ `
  mutation UpdateDriver(
    $input: UpdateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    updateDriver(input: $input, condition: $condition) {
      id
      name
      licenseNumber
      phone
      licenseExpiry
      Bus {
        id
        name
        status_on
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        routeID
        Route {
          id
          routeName
          pickupPoints
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      driverBusId
    }
  }
`;
export const deleteDriver = /* GraphQL */ `
  mutation DeleteDriver(
    $input: DeleteDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    deleteDriver(input: $input, condition: $condition) {
      id
      name
      licenseNumber
      phone
      licenseExpiry
      Bus {
        id
        name
        status_on
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        routeID
        Route {
          id
          routeName
          pickupPoints
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      driverBusId
    }
  }
`;
export const createConductor = /* GraphQL */ `
  mutation CreateConductor(
    $input: CreateConductorInput!
    $condition: ModelConductorConditionInput
  ) {
    createConductor(input: $input, condition: $condition) {
      id
      name
      phone
      Bus {
        id
        name
        status_on
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        routeID
        Route {
          id
          routeName
          pickupPoints
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      conductorBusId
    }
  }
`;
export const updateConductor = /* GraphQL */ `
  mutation UpdateConductor(
    $input: UpdateConductorInput!
    $condition: ModelConductorConditionInput
  ) {
    updateConductor(input: $input, condition: $condition) {
      id
      name
      phone
      Bus {
        id
        name
        status_on
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        routeID
        Route {
          id
          routeName
          pickupPoints
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      conductorBusId
    }
  }
`;
export const deleteConductor = /* GraphQL */ `
  mutation DeleteConductor(
    $input: DeleteConductorInput!
    $condition: ModelConductorConditionInput
  ) {
    deleteConductor(input: $input, condition: $condition) {
      id
      name
      phone
      Bus {
        id
        name
        status_on
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          nextToken
          startedAt
        }
        routeID
        Route {
          id
          routeName
          pickupPoints
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      conductorBusId
    }
  }
`;
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
      id
      name
      token
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
      id
      name
      token
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
      id
      name
      token
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
