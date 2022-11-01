import { API, Auth } from "aws-amplify";
import { CreateUser, userGroupUpdateInput } from "../../types/types";

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

export async function addUserToGroup(values: userGroupUpdateInput) {
	let apiName = "AdminQueries";
	let path = "/addUserToGroup";
	let myInit = {
		body: {
			username: values.userName,
		},
		headers: {
			"Content-Type": "application/json",
			Authorization: `${(await Auth.currentSession())
				.getAccessToken()
				.getJwtToken()}`,
		},
	};
	return await API.post(apiName, path, myInit);
}

export async function removeUserFromGroup(values: userGroupUpdateInput) {
	let apiName = "AdminQueries";
	let path = "/removeUserFromGroup";
	let myInit = {
		body: {
			username: values.userName,
		},
		headers: {
			"Content-Type": "application/json",
			Authorization: `${(await Auth.currentSession())
				.getAccessToken()
				.getJwtToken()}`,
		},
	};
	return await API.post(apiName, path, myInit);
}

export async function disableUser(values: userGroupUpdateInput) {
	let apiName = "AdminQueries";
	let path = "/disableUser";
	let myInit = {
		body: {
			username: values.userName,
		},
		headers: {
			"Content-Type": "application/json",
			Authorization: `${(await Auth.currentSession())
				.getAccessToken()
				.getJwtToken()}`,
		},
	};
	return await API.post(apiName, path, myInit);
}

export async function enableUser(values: userGroupUpdateInput) {
	let apiName = "AdminQueries";
	let path = "/enableUser";
	let myInit = {
		body: {
			username: values.userName,
		},
		headers: {
			"Content-Type": "application/json",
			Authorization: `${(await Auth.currentSession())
				.getAccessToken()
				.getJwtToken()}`,
		},
	};
	return await API.post(apiName, path, myInit);
}
