import React from "react";
import { Triangle } from "react-loader-spinner";

const LoginLayout = (props: Props) => {
  return (
    <main>
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
        <>{props.children}</>
      )}
    </main>
  );
};

type Props = {
  loading?: boolean;
  children?: JSX.Element;
};

export default LoginLayout;
