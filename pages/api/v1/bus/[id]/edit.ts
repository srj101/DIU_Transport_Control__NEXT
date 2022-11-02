import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";

import { UpdateBusMutation } from "../../../../../src/API";
import { updateBus } from "../../../../../src/graphql/mutations";

type ResponseData = {
	data?: UpdateBusMutation;
	error?: any;
};

export default async function updateBusByID(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });

	try {
		const { data } = (await API.graphql({
			query: updateBus,
			variables: req.body,
			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: UpdateBusMutation; errors: any[] };

		console.log(data.updateBus);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
