import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../../components/Layout/MainLayout";

const ConductorPage = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<MainLayout>
			<div>
				<h1>Hello Conductor {id}</h1>
			</div>
		</MainLayout>
	);
};

export default ConductorPage;
