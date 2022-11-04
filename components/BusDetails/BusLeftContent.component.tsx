import React, { useState } from "react";

import FitnessDetails from "../FitnessDetails/FitnessDetails.component";
import TicketItem from "../TicketItem/TicketItem.component";
const BusLeftContent = () => {
	return (
		<div className='flex-1'>
			<FitnessDetails />
			<TicketItem />
		</div>
	);
};

export default BusLeftContent;
