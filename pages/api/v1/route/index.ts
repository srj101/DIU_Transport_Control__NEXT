import { listRoutes } from "../../../../src/graphql/queries";
import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";
import { ListRoutesQuery } from "../../../../src/API";

type ResponseData = {
	data?: ListRoutesQuery;
	error?: any;
};

export default async function ListRoute(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });
	try {
		const { data } = (await API.graphql({
			query: listRoutes,

			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: ListRoutesQuery; errors: any[] };

		console.log(data.listRoutes);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
