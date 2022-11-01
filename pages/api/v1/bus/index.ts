import { listBuses } from "../../../../src/graphql/queries";
import type { NextApiRequest, NextApiResponse } from "next";
import { withSSRContext } from "aws-amplify";
import { ListBusesQuery } from "../../../../src/API";

type ResponseData = {
	data?: ListBusesQuery;
	error?: any;
};

export default async function ListBus(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });
	try {
		const { data } = (await API.graphql({
			query: listBuses,

			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: ListBusesQuery; errors: any[] };

		console.log(data.listBuses);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
