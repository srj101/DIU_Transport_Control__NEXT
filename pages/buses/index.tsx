import React, { useState } from "react";
import {
	DataGrid,
	GridActionsCellItem,
	GridColumns,
	GridRenderCellParams,
	GridToolbar,
} from "@mui/x-data-grid";
import MainLayout from "../../components/Layout/MainLayout";
import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";
import { listBuses } from "../../src/graphql/queries";
import { Bus } from "../../src/models";
import moment from "moment";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { json } from "stream/consumers";

export default function Buses({ buses }: { buses: Array<Bus> }) {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const handleDelete = (params: Bus) => {};
	const handleEdit = (params: Bus) => {
		console.log(params);
	};
	const columns = React.useMemo<GridColumns<Bus>>(
		() => [
			{ field: "id", headerName: "ID", width: 140 },
			{ field: "name", headerName: "Name", width: 130 },
			{ field: "trackingID", headerName: "TrackingID", width: 130 },
			{
				field: "routeID",
				headerName: "RouteID",
				width: 200,
			},
			{
				field: "_version",
				headerName: "Version",
				width: 90,
			},
			{
				field: "_lastChangedAt",
				headerName: "Last Update",
				renderCell: (params: GridRenderCellParams<Bus>) => (
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
				field: "busDriverId",
				headerName: "Driver",
				width: 200,

				renderCell: (params: GridRenderCellParams<Bus>) => (
					<strong>{params.row.Driver.name}</strong>
				),
			},

			{
				field: "busConductorId",
				headerName: "Conductor",
				width: 200,
				renderCell: (params: GridRenderCellParams<Bus>) => (
					<strong>{params.row.Conductor.name}</strong>
				),
			},
			{
				field: "actions",
				type: "actions",
				width: 200,
				getActions: (params: Bus | any) => [
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
						onClick={() => router.push(`/buses/${params.id}`)}
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
					rows={buses}
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
	const response = await SSR.API.graphql({ query: listBuses });
	console.log(response.data.listBuses.items);
	return {
		props: {
			buses: response.data.listBuses.items,
		},
	};
};
