/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSchedule = /* GraphQL */ `
  query GetSchedule($id: ID!) {
    getSchedule(id: $id) {
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
export const listSchedules = /* GraphQL */ `
  query ListSchedules(
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSchedules = /* GraphQL */ `
  query SyncSchedules(
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBus = /* GraphQL */ `
  query GetBus($id: ID!) {
    getBus(id: $id) {
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
export const listBuses = /* GraphQL */ `
  query ListBuses(
    $filter: ModelBusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBuses = /* GraphQL */ `
  query SyncBuses(
    $filter: ModelBusFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getRoute = /* GraphQL */ `
  query GetRoute($id: ID!) {
    getRoute(id: $id) {
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
export const listRoutes = /* GraphQL */ `
  query ListRoutes(
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncRoutes = /* GraphQL */ `
  query SyncRoutes(
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRoutes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getRouteImage = /* GraphQL */ `
  query GetRouteImage($id: ID!) {
    getRouteImage(id: $id) {
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
export const listRouteImages = /* GraphQL */ `
  query ListRouteImages(
    $filter: ModelRouteImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRouteImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncRouteImages = /* GraphQL */ `
  query SyncRouteImages(
    $filter: ModelRouteImageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRouteImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBusImage = /* GraphQL */ `
  query GetBusImage($id: ID!) {
    getBusImage(id: $id) {
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
export const listBusImages = /* GraphQL */ `
  query ListBusImages(
    $filter: ModelBusImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tags
        caption
        url
        busID
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBusImages = /* GraphQL */ `
  query SyncBusImages(
    $filter: ModelBusImageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBusImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tags
        caption
        url
        busID
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getDriver = /* GraphQL */ `
  query GetDriver($id: ID!) {
    getDriver(id: $id) {
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
export const listDrivers = /* GraphQL */ `
  query ListDrivers(
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDrivers = /* GraphQL */ `
  query SyncDrivers(
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDrivers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getConductor = /* GraphQL */ `
  query GetConductor($id: ID!) {
    getConductor(id: $id) {
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
export const listConductors = /* GraphQL */ `
  query ListConductors(
    $filter: ModelConductorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConductors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncConductors = /* GraphQL */ `
  query SyncConductors(
    $filter: ModelConductorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConductors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
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
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTickets = /* GraphQL */ `
  query SyncTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTickets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
