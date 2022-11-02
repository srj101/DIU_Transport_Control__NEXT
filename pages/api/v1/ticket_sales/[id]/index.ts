import type { NextApiRequest, NextApiResponse } from "next";
import { withSSRContext } from "aws-amplify";
import { getTicket } from "../../../../../src/graphql/queries";
import { GetTicketQuery } from "../../../../../src/API";

type ResponseData = {
	data?: GetTicketQuery;
	error?: any;
};

export default async function getTicketInfo(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });
	try {
		const { data } = (await API.graphql({
			query: getTicket,
			variables: { id: req.query.id },
			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: GetTicketQuery; errors: any[] };

		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
