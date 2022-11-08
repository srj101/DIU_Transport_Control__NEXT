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
    <div className="w-100 h-100 d-flex flex-column justify-content-start ">
      <Head>
        <title>Smart Transport Management || DIU Transport Controll </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col">
          <HeadingComponent />
          <div className="flex py-4">
            <div className="flex flex-col w-9/12 px-4">
              <TransportMeta
                students={1300}
                facalties={750}
                sales={293811}
                staffs={219}
                buses={60}
              />

              <RouteStatistics
                scheduleId="sdfkjbdf"
                day="sunday"
                month="november"
                year={2019}
                title="Students in different routes"
              />

              <BusStatistics
                scheduleId="sdfkjbdf"
                day="sunday"
                month="january"
                year={2019}
                title="Todays Ticket Scans"
              />
            </div>
            <div className="flex flex-col w-3/12 border-l-2 px-4">
              <RightSideBar />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
