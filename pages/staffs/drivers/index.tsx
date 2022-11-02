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
import {
	listBuses,
	listConductors,
	listDrivers,
} from "../../../src/graphql/queries";
import { Bus, Driver } from "../../../src/models";
import moment from "moment";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function Drivers({ drivers }: { drivers: Array<Driver> }) {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const handleDelete = (params: Driver) => {};
	const handleEdit = (params: Driver) => {
		console.log(params);
	};
	const columns = React.useMemo<GridColumns<Driver>>(
		() => [
			{ field: "id", headerName: "ID", width: 140 },
			{ field: "name", headerName: "Name", width: 130 },
			{ field: "phone", headerName: "Phone", width: 130 },
			{
				field: "licenseNumber",
				headerName: "LicenseNumber",
				width: 200,
			},
			{
				field: "licenseExpiry",
				headerName: "LicenseExpiry",
				width: 100,
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
				field: "driverBusId",
				headerName: "DriverBusID",
				width: 200,
			},

			{
				field: "actions",
				type: "actions",
				headerName: "Action",
				width: 200,
				getActions: (params: Driver | any) => [
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
						onClick={() => router.push(`/staffs/drivers/${params.id}`)}
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
					rows={drivers}
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
	const response = await SSR.API.graphql({ query: listDrivers });
	console.log(response.data.listDrivers.items);
	return {
		props: {
			drivers: response.data.listDrivers.items,
		},
	};
};
