import React, { useState } from "react";
import {
	DataGrid,
	GridActionsCellItem,
	GridColumns,
	GridRenderCellParams,
	GridToolbar,
} from "@mui/x-data-grid";
import MainLayout from "../../../components/Layout/MainLayout";
import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";
import { Conductor } from "../../../src/models";
import moment from "moment";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { listConductors } from "../../../src/graphql/queries";

export default function Conductors({
	conductor,
}: {
	conductor: Array<Conductor>;
}) {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const handleDelete = (params: Conductor) => {};
	const handleEdit = (params: Conductor) => {
		console.log(params);
	};
	const columns = React.useMemo<GridColumns<Conductor>>(
		() => [
			{ field: "id", headerName: "ID", width: 140 },
			{ field: "name", headerName: "Name", width: 130 },
			{ field: "phone", headerName: "Phone", width: 130 },

			{
				field: "_version",
				headerName: "Version",
				width: 90,
			},
			{
				field: "_lastChangedAt",
				headerName: "Last Update",
				renderCell: (params: GridRenderCellParams<Conductor>) => (
					<strong>
						{moment(
							moment(params._lastChangedAt).format("DD-MM-YYYY"),
							"DD-MM-YYYY"
						).fromNow()}
					</strong>
				),
				width: 200,
			},
			{
				field: "conductorBusId",
				headerName: "ConductorBusID",
				width: 200,
			},

			{
				field: "actions",
				type: "actions",
				headerName: "Action",
				width: 200,
				getActions: (params: Conductor | any) => [
					<GridActionsCellItem
						icon={<DeleteOutlineIcon />}
						label='Delete'
						onClick={() => handleDelete(params.id)}
					/>,
					<GridActionsCellItem
						icon={<EditIcon />}
						label='Edit'
						onClick={() => setOpen(true)}
					/>,
					<GridActionsCellItem
						icon={<RemoveRedEyeIcon />}
						label='View'
						onClick={() => router.push(`/staffs/conductors/${params.id}`)}
					/>,
				],
			},
		],
		[handleDelete, handleEdit]
	);

	return (
		<MainLayout>
			<div style={{ height: 730, width: "100%" }}>
				<DataGrid
					rows={conductor}
					columns={columns}
					pageSize={11}
					rowsPerPageOptions={[5]}
					checkboxSelection
					components={{ Toolbar: GridToolbar }}
				/>
				<Modal
					title='Modal 1000px width'
					centered
					open={open}
					onOk={() => setOpen(false)}
					onCancel={() => setOpen(false)}
					width={1000}
				>
					<p>some contents...</p>
					<p>some contents...</p>
					<p>some contents...</p>
				</Modal>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const SSR = withSSRContext({ req });
	const response = await SSR.API.graphql({ query: listConductors });
	console.log(response.data.listConductors.items);
	return {
		props: {
			conductor: response.data.listConductors.items,
		},
	};
};
