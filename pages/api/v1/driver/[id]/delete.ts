import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";

import {
	DeleteDriverMutation,
} from "../../../../../src/API";
import {
	deleteDriver,
=
} from "../../../../../src/graphql/mutations";

type ResponseData = {
	data?: DeleteDriverMutation;
	error?: any;
};

export default async function deleteDriverByID(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });

	try {
		const { data } = (await API.graphql({
			query: deleteDriver,
			variables: { id: req.body.id },
			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: DeleteDriverMutation; errors: any[] };

		console.log(data.deleteDriver);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
