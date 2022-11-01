import { listSchedules } from "../../../../src/graphql/queries";
import type { NextApiRequest, NextApiResponse } from "next";
import { Schedule } from "../../../../src/models";
import { withSSRContext } from "aws-amplify";
import { ListSchedulesQuery } from "../../../../src/API";

type ResponseData = {
	message: string;
};

export default async function ListSchedule(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });
	try {
		const data = (await API.graphql({
			query: listSchedules,

			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: ListSchedulesQuery; errors: any[] };

		console.log(data);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
