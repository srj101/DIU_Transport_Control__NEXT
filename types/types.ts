export type user = {
  Username: string;
  UserStatus: string;
  UserLastModifiedDate: string;
  Enabled: boolean;
  Attributes: string[];
};

export type CreateUser = {
  username: string;
  email: string;
  password: string;
};

type Attributes = {
  Name: String;
  Value: String;
};
export interface UserTableColumn {
  Attributes: Attributes[];
  Username: string;
  UserStatus: string;
  email: string;
  Enabled: boolean;
  UserCreateDate: string;
}

export type Role = {
  GroupName: string;
  Description: string;
};
