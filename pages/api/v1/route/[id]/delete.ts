import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";

import { DeleteRouteMutation } from "../../../../../src/API";
import { deleteRoute } from "../../../../../src/graphql/mutations";

type ResponseData = {
	data?: DeleteRouteMutation;
	error?: any;
};

export default async function deleteScheduleByID(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });

	try {
		const { data } = (await API.graphql({
			query: deleteRoute,
			variables: { id: req.body.id },
			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: DeleteRouteMutation; errors: any[] };

		console.log(data.deleteRoute);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
