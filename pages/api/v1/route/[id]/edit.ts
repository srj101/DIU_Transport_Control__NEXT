import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";

import { UpdateRouteMutation } from "../../../../../src/API";
import { updateRoute } from "../../../../../src/graphql/mutations";

type ResponseData = {
	data?: UpdateRouteMutation;
	error?: any;
};

export default async function updateRouteByID(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });

	try {
		const { data } = (await API.graphql({
			query: updateRoute,
			variables: req.body,
			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: UpdateRouteMutation; errors: any[] };

		console.log(data.updateRoute);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
