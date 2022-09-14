import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../components/Layout/MainLayout";

const EditUser = ({}) => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <MainLayout>
      <div>Profile of {username}</div>
    </MainLayout>
  );
};

export default EditUser;
