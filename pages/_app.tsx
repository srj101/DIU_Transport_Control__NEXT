import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsExports from "../src/aws-exports";
import "antd/dist/antd.css";
import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Authenticator className="h-screen antialiased text-slate-500 dark:text-slate-400  dark:bg-slate-900">
      <Component {...pageProps} />
    </Authenticator>
  );
}

export default MyApp;
