import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";

import { getRoute } from "../../../../../src/graphql/queries";
import { GetRouteQuery } from "../../../../../src/API";

type ResponseData = {
	data?: GetRouteQuery;
	error?: any;
};

export default async function getRouteByID(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });
	try {
		const { data } = (await API.graphql({
			query: getRoute,
			variables: { id: req.query.id },
			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: GetRouteQuery; errors: any[] };

		console.log(data.getRoute);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
