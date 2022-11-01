import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";

import {
    DeleteConductorMutation,
	DeleteDriverMutation,
} from "../../../../../src/API";
import {
    deleteConductor,
	deleteDriver,
=
} from "../../../../../src/graphql/mutations";

type ResponseData = {
	data?: DeleteConductorMutation;
	error?: any;
};

export default async function deleteConductorByID(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });

	try {
		const { data } = (await API.graphql({
			query: deleteConductor,
			variables: { id: req.body.id },
			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: DeleteConductorMutation; errors: any[] };

		console.log(data.deleteConductor);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
