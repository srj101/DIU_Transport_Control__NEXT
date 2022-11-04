import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../../components/Layout/MainLayout";
import dynamic from "next/dynamic";

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
			<div className={"flex flex-nowrap justify-between"}>
				<div>
					<BusLeftContent />
				</div>
				<div>
					<BusRightContent />
				</div>
			</div>
		</MainLayout>
	);
};

export default BusPage;
