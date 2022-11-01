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
      <h2>This is h2 tag</h2>
    </div>
  );
}
//53pri9914vl2b03h2a10uf7s6h

// prev :
// prev :
// prev :  39f2mj8m2er7tuuivduifnbgqg
export default Roles;
