import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../../components/Layout/MainLayout";
import { listGroupsForUser } from "../../../utils/queries/query";
import Roles from "../../../components/Roles/Roles";
import { Role } from "../../../types/types";

const EditUserRoles = ({}) => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { username } = router.query;
  async function listUserGroups() {
    try {
      const { Groups } = await listGroupsForUser(username);
      setRoles(Groups);
      setLoading(false);
      return Groups;
    } catch (error: any) {
      console.log(error.response.data.message);
      setLoading(false);
      return;
    }
  }
  useEffect(() => {
    setLoading(true);
    listUserGroups();
  }, []);

  return (
    <MainLayout loading={loading}>
      <div className="">
        <p>Roles of {username}</p>

        <Roles roles={roles} />
      </div>
    </MainLayout>
  );
};

export default EditUserRoles;
