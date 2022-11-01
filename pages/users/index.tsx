import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import { listUsers } from "../../utils/queries/query";
import { Table } from "antd";
import { columns } from "../../utils/tables/users";
import { UserTableColumn } from "../../types/types";
import { Button } from "@mui/material";
import { FaUserPlus } from "react-icons/fa";
import { MenuItem } from "react-pro-sidebar";
import NewUser from "./new";
const Users = () => {
  const [users, setUsers] = useState<UserTableColumn[]>([]);

  useEffect(() => {
    async function listAllUsers() {
      try {
        const { Users } = await listUsers();

        setUsers(Users);
        console.log(users);
        return users;
      } catch (error: any) {
        console.log(error.response.data.message);
        return;
      }
    }
    listAllUsers();
  }, []);

  return (
 
    <MainLayout>

      <>
      
          <div className="text-bold">
        <MenuItem icon={<FaUserPlus />}>
                <Button onClick={ (e) => <NewUser/> }>New User</Button>
        </MenuItem>
      </div>
      <div className="d-flex flex-column justify-content-center w-100 h-100">
        <Table
          columns={columns}
          dataSource={users}
          loading={users.length === 0}
        />
      </div> 
      </>
 
    </MainLayout>
  );
};

export default Users;
