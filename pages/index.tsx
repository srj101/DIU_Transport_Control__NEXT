import Head from "next/head";
import Layout from "../components/Layout/MainLayout";
import type { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-start ">
      <Head>
        <title>Fleet App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h2>Dashboard</h2>
      </Layout>
    </div>
  );
};

export default Dashboard;
