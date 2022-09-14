import { withSSRContext } from "aws-amplify";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import MainLayout from "../components/Layout/MainLayout";

function Protected({
  authenticated,
  username,
  groups,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  if (!authenticated && !groups.includes("Admins")) {
    router.push("/");
    return;
  }
  return (
    <MainLayout>
      <>
        <h1>
          Hello {username} from SSR route! <br />
        </h1>
        {groups?.map((group: string) => (
          <h2>{group}</h2>
        ))}
      </>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { Auth } = withSSRContext(context);
  try {
    const user = await Auth.currentAuthenticatedUser();

    return {
      props: {
        authenticated: true,
        username: user.username,
        groups: user.signInUserSession.accessToken.payload["cognito:groups"],
      },
    };
  } catch (err) {
    return {
      props: {
        authenticated: false,
      },
    };
  }
};

export default Protected;
