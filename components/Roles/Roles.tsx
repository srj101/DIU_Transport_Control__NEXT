import React from "react";
import { Role } from "../../types/types";
type Props = {
  roles: Role[];
};
function Roles({ roles }: Props) {
  return (
    <div>
      {roles.map((role) => (
        <p className="text-orange">{role.GroupName}</p>
      ))}
      <p>This is p tag</p>
    </div>
  );
}

export default Roles;
