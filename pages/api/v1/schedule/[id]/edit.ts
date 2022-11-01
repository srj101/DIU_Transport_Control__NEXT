import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";

import { getSchedule } from "../../../../../src/graphql/queries";
import {
	UpdateBusMutation,
	UpdateScheduleMutation,
} from "../../../../../src/API";
import { updateSchedule } from "../../../../../src/graphql/mutations";

type ResponseData = {
	data?: UpdateScheduleMutation;
	error?: any;
};

export default async function updateScheduleByID(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });

	try {
		const { data } = (await API.graphql({
			query: updateSchedule,
			variables: req.body,
			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: UpdateScheduleMutation; errors: any[] };

		console.log(data.updateSchedule);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
