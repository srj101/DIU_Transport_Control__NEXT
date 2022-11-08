import React, { useState } from "react";
import BusSchedule from "../BusSchedule/BusSchedule";

import FitnessDetails from "../FitnessDetails/FitnessDetails.component";
import TicketItem from "../TicketItem/TicketItem.component";
import TicketSell from "../TicketSell/TicketSell";
const BusLeftContent = () => {
	return (
		<div className=''>
			<FitnessDetails />

			<TicketSell />
			<div className='my-10'>
				<h1>Available Tickets</h1>
				<TicketItem />
			</div>
			<div className='my-10'>
				<h1>Schedules</h1>
				<BusSchedule />
			</div>
		</div>
	);
};

export default BusLeftContent;
