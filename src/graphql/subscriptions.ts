/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule {
    onCreateSchedule {
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
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule {
    onUpdateSchedule {
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
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule {
    onDeleteSchedule {
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
export const onCreateBus = /* GraphQL */ `
  subscription OnCreateBus {
    onCreateBus {
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
export const onUpdateBus = /* GraphQL */ `
  subscription OnUpdateBus {
    onUpdateBus {
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
export const onDeleteBus = /* GraphQL */ `
  subscription OnDeleteBus {
    onDeleteBus {
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
export const onCreateRoute = /* GraphQL */ `
  subscription OnCreateRoute {
    onCreateRoute {
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
export const onUpdateRoute = /* GraphQL */ `
  subscription OnUpdateRoute {
    onUpdateRoute {
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
export const onDeleteRoute = /* GraphQL */ `
  subscription OnDeleteRoute {
    onDeleteRoute {
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
export const onCreateRouteImage = /* GraphQL */ `
  subscription OnCreateRouteImage {
    onCreateRouteImage {
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
export const onUpdateRouteImage = /* GraphQL */ `
  subscription OnUpdateRouteImage {
    onUpdateRouteImage {
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
export const onDeleteRouteImage = /* GraphQL */ `
  subscription OnDeleteRouteImage {
    onDeleteRouteImage {
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
export const onCreateBusImage = /* GraphQL */ `
  subscription OnCreateBusImage {
    onCreateBusImage {
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
export const onUpdateBusImage = /* GraphQL */ `
  subscription OnUpdateBusImage {
    onUpdateBusImage {
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
export const onDeleteBusImage = /* GraphQL */ `
  subscription OnDeleteBusImage {
    onDeleteBusImage {
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
export const onCreateDriver = /* GraphQL */ `
  subscription OnCreateDriver {
    onCreateDriver {
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
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver {
    onUpdateDriver {
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
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver {
    onDeleteDriver {
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
export const onCreateConductor = /* GraphQL */ `
  subscription OnCreateConductor {
    onCreateConductor {
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
export const onUpdateConductor = /* GraphQL */ `
  subscription OnUpdateConductor {
    onUpdateConductor {
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
export const onDeleteConductor = /* GraphQL */ `
  subscription OnDeleteConductor {
    onDeleteConductor {
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
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket {
    onCreateTicket {
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
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket {
    onUpdateTicket {
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
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket {
    onDeleteTicket {
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
