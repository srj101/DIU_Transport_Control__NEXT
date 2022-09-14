import { API, Auth } from "aws-amplify";
import { CreateUser } from "../../types/types";

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

export async function createUser(values: CreateUser) {
  let apiName = "AdminQueries";
  let path = "/CreateUser";
  let myInit = {
    body: values,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  };

  const data = await API.post(apiName, path, myInit);
  return data;
}

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
}
