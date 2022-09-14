import { Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { UserTableColumn } from "../../types/types";
export const columns: ColumnsType<UserTableColumn> = [
  {
    title: "Username",
    dataIndex: "Username",
    key: "Username",
    render: (text) => <Link href={`/users/${text}`}>{text}</Link>,
  },
  Table.SELECTION_COLUMN,
  {
    title: "Email",
    key: "email",
    render: (_, rec) => (
      <Space size="middle">
        {rec.Attributes.filter((x) => x.Name === "email")[0]["Value"]}
      </Space>
    ),
  },
  {
    title: "Phone",
    key: "phone_number",
    render: (_, rec) => (
      <Space size="middle">
        {rec.Attributes.filter((x) => x.Name === "phone_number")[0]?.Value}
      </Space>
    ),
  },
  {
    title: "Email Verified",
    key: "email_verified",
    render: (_, rec) => (
      <Space size="middle">
        {rec.Attributes.filter((x) => x.Name === "email_verified")[0]?.Value}
      </Space>
    ),
  },
  {
    title: "Phone Verified",
    key: "phone_number_verified",
    render: (_, rec) => (
      <Space size="middle">
        {
          rec.Attributes.filter((x) => x.Name === "phone_number_verified")[0]
            ?.Value
        }
      </Space>
    ),
  },
  {
    title: "Enabled",
    dataIndex: "Enabled",
    key: "enabled",
    render: (val) => (
      <Space size="middle">{val ? "Enabled" : "Disabled"}</Space>
    ),
  },
  {
    title: "Status",
    dataIndex: "UserStatus",
    key: "userstatus",
  },
  {
    title: "Joined",
    dataIndex: "UserCreateDate",
    key: "userCreateDate",
  },
  {
    title: "Action",
    key: "action",
    render: (_, rec) => (
      <Space size="middle">
        <Link href={`/users/roles/${rec.Username}`}>Roles</Link>
        <a>Delete</a>
      </Space>
    ),
  },
];
