import { listDrivers } from "../../../../src/graphql/queries";
import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";
import { ListDriversQuery } from "../../../../src/API";

type ResponseData = {
	data?: ListDriversQuery;
	error?: any;
};

export default async function ListDriver(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });
	try {
		const { data } = (await API.graphql({
			query: listDrivers,

			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: ListDriversQuery; errors: any[] };

		console.log(data.listDrivers);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
