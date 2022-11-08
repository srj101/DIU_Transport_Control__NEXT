import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsExports from "../src/aws-exports";
import "antd/dist/antd.css";
import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";

import LoginLayout from "../components/Layout/LoginLayout";

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<LoginLayout>
			<>
				<Authenticator hideSignUp className='h-screen antialiased '>
					<Component {...pageProps} />
				</Authenticator>
			</>
		</LoginLayout>
	);
}

export default MyApp;
