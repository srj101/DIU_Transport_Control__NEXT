import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";

import { getDriver } from "../../../../../src/graphql/queries";
import { GetDriverQuery } from "../../../../../src/API";

type ResponseData = {
	data?: GetDriverQuery;
	error?: any;
};

export default async function getDriverByID(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });
	try {
		const { data } = (await API.graphql({
			query: getDriver,

			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: GetDriverQuery; errors: any[] };

		console.log(data.getDriver);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
