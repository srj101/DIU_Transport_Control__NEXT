import type { NextApiRequest, NextApiResponse } from "next";

import { withSSRContext } from "aws-amplify";

import { getSchedule } from "../../../../../src/graphql/queries";
import { GetScheduleQuery } from "../../../../../src/API";

type ResponseData = {
	data?: GetScheduleQuery;
	error?: any;
};

export default async function getScheduleByID(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });
	try {
		const { data } = (await API.graphql({
			query: getSchedule,
			variables: { id: req.query.id },
			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: GetScheduleQuery; errors: any[] };

		console.log(data.getSchedule);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
