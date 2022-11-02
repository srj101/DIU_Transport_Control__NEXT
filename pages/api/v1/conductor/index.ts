import { listConductors } from "../../../../src/graphql/queries";
import type { NextApiRequest, NextApiResponse } from "next";
import { withSSRContext } from "aws-amplify";
import { ListConductorsQuery } from "../../../../src/API";

type ResponseData = {
	data?: ListConductorsQuery;
	error?: any;
};

export default async function ListConductor(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { Auth, API } = withSSRContext({ req });
	try {
		const { data } = (await API.graphql({
			query: listConductors,
			authMode: "AMAZON_COGNITO_USER_POOLS",
		})) as { data: ListConductorsQuery; errors: any[] };

		console.log(data.listConductors);
		res.status(200).json({ data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
