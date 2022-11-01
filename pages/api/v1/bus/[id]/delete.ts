import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";

import { DeleteBusMutation } from "../../../../../src/API";
import { deleteBus } from "../../../../../src/graphql/mutations";

type ResponseData = {
	data?: DeleteBusMutation;
	error?: any;
};

export default async function deleteBusByID(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });

	try {
		const { data } = (await API.graphql({
			query: deleteBus,
			variables: { id: req.body.id },
			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: DeleteBusMutation; errors: any[] };

		console.log(data.deleteBus);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
