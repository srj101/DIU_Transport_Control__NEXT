import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";

import { getBus } from "../../../../../src/graphql/queries";
import { GetBusQuery } from "../../../../../src/API";

type ResponseData = {
	data?: GetBusQuery;
	error?: any;
};

export default async function getBusByID(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });
	try {
		const { data } = (await API.graphql({
			query: getBus,

			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: GetBusQuery; errors: any[] };

		console.log(data.getBus);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
