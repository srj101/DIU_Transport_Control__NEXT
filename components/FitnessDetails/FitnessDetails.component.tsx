import React, { useState } from "react";
import { Modal, Progress } from "antd";
const FitnessDetails = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<div>
			<div className='flex-1'>
				<Progress type='circle' percent={75} />
				<button onClick={showModal}>Fitness Details</button>
			</div>
			<Modal
				title='Fitness Details'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<p>
					Engine Health
					<Progress
						strokeColor={{
							from: "#FF0000",
							to: "#7CFC00",
						}}
						percent={100}
						status='active'
					/>{" "}
				</p>
				<p>
					Weel
					<Progress
						strokeColor={{
							from: "#FF0000",
							to: "#7CFC00",
						}}
						percent={50}
						status='active'
					/>{" "}
				</p>
				<p>
					Window
					<Progress
						strokeColor={{
							from: "#FF0000",
							to: "#7CFC00",
						}}
						percent={80}
						status='active'
					/>{" "}
				</p>
			</Modal>
		</div>
	);
};

export default FitnessDetails;
