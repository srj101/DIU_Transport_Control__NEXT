import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../../components/Layout/MainLayout";

const BusPage = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<MainLayout>
			<h1>BusPage {id}</h1>
		</MainLayout>
	);
};

export default BusPage;
