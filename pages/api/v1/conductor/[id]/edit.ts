import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";

import { UpdateConductorMutation } from "../../../../../src/API";
import { updateConductor } from "../../../../../src/graphql/mutations";

type ResponseData = {
	data?: UpdateConductorMutation;
	error?: any;
};

export default async function updateConductorByID(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });

	try {
		const { data } = (await API.graphql({
			query: updateConductor,
			variables: req.body,
			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: UpdateConductorMutation; errors: any[] };

		console.log(data.updateConductor);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
