import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";

import { DeleteScheduleMutation } from "../../../../../src/API";
import { deleteSchedule } from "../../../../../src/graphql/mutations";

type ResponseData = {
	data?: DeleteScheduleMutation;
	error?: any;
};

export default async function deleteScheduleByID(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });

	try {
		const { data } = (await API.graphql({
			query: deleteSchedule,
			variables: { id: req.body.id },
			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: DeleteScheduleMutation; errors: any[] };

		console.log(data.deleteSchedule);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
