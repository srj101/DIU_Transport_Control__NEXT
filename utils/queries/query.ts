import { API, Auth } from "aws-amplify";

export async function listUsers(token?: any, limit?: Number) {
  let apiName = "AdminQueries";
  let path = "/listUsers";
  let myInit = {
    queryStringParameters: {
      limit: limit,
      token: token,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  };

  const data = await API.get(apiName, path, myInit);

  console.log(data);
  return data;
}

export async function listGroups(token?: any, limit?: Number) {
  let apiName = "AdminQueries";
  let path = "/listGroups";
  let myInit = {
    queryStringParameters: {
      limit: limit,
      token: token,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  };

  const data = await API.get(apiName, path, myInit);

  console.log(data);
  return data;
};



export async function listGroupsForUser(username: any) {
  let apiName = "AdminQueries";
  let path = "/listGroupsForUser";
  let myInit = {
    queryStringParameters: {
      username,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  };

  const data = await API.get(apiName, path, myInit);
  return data;
};


export async function getUser(username: any) {
  let apiName = "AdminQueries";
  let path = "/getUser";
  let myInit = {
    queryStringParameters: {
      username,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  };

  const data = await API.get(apiName, path, myInit);
  return data;
};

