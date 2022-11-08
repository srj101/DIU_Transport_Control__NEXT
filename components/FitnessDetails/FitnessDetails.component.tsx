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
		<div className='text-center'>
			<div className='flex flex-col py-4'>
				<div>
					<Progress type='circle' percent={75} />
				</div>
				<div className=''>
					<button style={{ color: "green" }} onClick={showModal}>
						Score
					</button>
				</div>
			</div>
			<Modal
				title='Score'
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
					Wheel
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
