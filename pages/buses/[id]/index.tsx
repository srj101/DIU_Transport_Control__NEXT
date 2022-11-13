import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../../components/Layout/MainLayout";
import dynamic from "next/dynamic";
import SingleBusRight from "../../../components/SingleBusRoute/SingleBusright/SingleBusRight";


const BusLeftContent = dynamic(
	() => import("../../../components/BusDetails/BusLeftContent.component"),
	{
		ssr: false,
	}
);

const BusRightContent = dynamic(
	() => import("../../../components/BusDetails/BusRightContent.component"),
	{
		ssr: false,
	}
);
const BusPage = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<MainLayout>
			<div>
				<h1 className="text-4xl font-bold text-blue-700 text-center mb-10">Bus Details For: <span className="text-red-600">SujoMukhi12</span></h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<div className="col-span-2 text-center">
					<h3 className="text-2xl font-bold text-purple-700">Your Bus Information</h3>
				</div>
				<div className="text-center mx-auto">
					<h3 className="text-2xl font-bold text-purple-700">Your Bus Person Info</h3>
					<SingleBusRight></SingleBusRight>
				</div>
			</div>
			</div>
			

		</MainLayout>
	);
};

export default BusPage;
