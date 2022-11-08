import Head from "next/head";
import Layout from "../components/Layout/MainLayout";
import type { NextPage } from "next";
import HeadingComponent from "../components/Header/HeadingComponent";
import RightSideBar from "../components/SideBar/RightSideBar";
import RouteStatistics from "../components/Statistics/RouteStatistics";
import TransportMeta from "../components/Statistics/TransportMeta";
import BusStatistics from "../components/Statistics/BusStatistics";

const Dashboard: NextPage = () => {
	return (
		<div className='w-100 h-100 d-flex flex-column justify-content-start '>
			<Head>
				<title>Smart Transport Management || DIU Transport Controll </title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<div className='flex'>
					<h3>Good Morning!</h3>
				</div>
			</Layout>
		</div>
	);
};

export default Dashboard;
