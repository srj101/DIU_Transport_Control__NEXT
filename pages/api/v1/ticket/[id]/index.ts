import type { NextApiRequest, NextApiResponse } from "next";
import { withSSRContext } from "aws-amplify";
import { listTickets } from "../../../../../src/graphql/queries";
import { ListTicketsQuery } from "../../../../../src/API";

type ResponseData = {
	data?: ListTicketsQuery;
	error?: any;
};

export default async function ListSchedule(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });
	try {
		const { data } = (await API.graphql({
			query: listTickets,

			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: ListTicketsQuery; errors: any[] };

		console.log(data.listTickets);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
