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
import { listSchedules } from "../../src/graphql/queries";

import moment from "moment";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { Schedule } from "../../src/models";

export default function Schedules({ schedule }: { schedule: Array<Schedule> }) {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const handleDelete = (params: Schedule) => {};
	const handleEdit = (params: Schedule) => {
		console.log(params);
	};
	const columns = React.useMemo<GridColumns<Schedule>>(
		() => [
			{
				field: "id",
				headerName: "ID",
				width: 125,
				minWidth: 150,
				maxWidth: 200,
			},
			{ field: "name", headerName: "Name", width: 130 },
			{ field: "type", headerName: "Status", width: 130 },
			{
				field: "day",
				headerName: "Day",
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
				renderCell: (params: GridRenderCellParams<Schedule>) => (
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
				field: "actions",
				type: "actions",
				headerName: "Action",
				width: 200,
				getActions: (params: Schedule | any) => [
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
						onClick={() => router.push(`/schedules/${params.id}`)}
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
					rows={schedule}
					aria-label='Schedule List'
					columns={columns}
					pageSize={11}
					rowsPerPageOptions={[1]}
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
	const response = await SSR.API.graphql({ query: listSchedules });
	console.log(response.data.listSchedules.items);
	return {
		props: {
			schedule: response.data.listSchedules.items,
		},
	};
};
