import React, { useEffect } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Triangle } from "react-loader-spinner";

const MainLayout = (props: Props) => {
  const [sideBarCollapsed, setSideBarCollapsed] = React.useState(true);
  useEffect(() => {}, [props.loading]);
  return (
    <div className="">
      <main className="main flex">
        <Sidebar sideBarCollapsed={sideBarCollapsed} />

        <div className="w-full">
          <Header
            sideBarCollapsed={sideBarCollapsed}
            setSideBarCollapsed={setSideBarCollapsed}
          />
          <div className="page-contents p-8">
            {props.loading && props.loading === true ? (
              <Triangle
                height="80"
                width="100%"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                visible={true}
                wrapperClass="flex justify-center items-center my-12"
              />
            ) : (
              props.children
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

type Props = {
  loading?: boolean;
  children?: JSX.Element;
};

export default MainLayout;
