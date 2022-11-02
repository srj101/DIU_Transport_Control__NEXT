import type { NextApiRequest, NextApiResponse } from "next";
import { withSSRContext } from "aws-amplify";
import { listTicketSales } from "../../../../src/graphql/queries";
import { ListTicketSalesQuery } from "../../../../src/API";

type ResponseData = {
	data?: ListTicketSalesQuery;
	error?: any;
};

export default async function TicketSalesList(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });
	try {
		console.log(req.query);
		const { data } = (await API.graphql({
			query: listTicketSales,
			variables: {
				limit: Number(req.query.limit),
				nextToken: req.query.nextToken,
			},
			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: ListTicketSalesQuery; errors: any[] };

		console.log(data.listTicketSales);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
