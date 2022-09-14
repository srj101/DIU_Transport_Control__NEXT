import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns } from "../../utils/tables/tickets";
import { rows } from "../../utils/dummy/users";

const TicketHistory = () => {
  return (
    <MainLayout>
      <div className="justify-center w-100 h-128">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          sortingOrder={["desc", "asc"]}
          initialState={{
            sorting: {
              sortModel: [
                {
                  field: "commodity",
                  sort: "asc",
                },
              ],
            },
          }}
          components={{ Toolbar: GridToolbar }}
        />
      </div>
    </MainLayout>
  );
};

export default TicketHistory;
