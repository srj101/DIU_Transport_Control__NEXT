import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";

import { getConductor } from "../../../../../src/graphql/queries";
import { GetConductorQuery } from "../../../../../src/API";

type ResponseData = {
	data?: GetConductorQuery;
	error?: any;
};

export default async function getConductorByID(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });
	try {
		const { data } = (await API.graphql({
			query: getConductor,

			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: GetConductorQuery; errors: any[] };

		console.log(data.getConductor);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
