import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../../components/Layout/MainLayout";

const DriverPage = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<MainLayout>
			<div>
				<h1>Hello Drivers {id}</h1>
			</div>
		</MainLayout>
	);
};

export default DriverPage;
