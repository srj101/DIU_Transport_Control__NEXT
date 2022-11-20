import dynamic from 'next/dynamic';
import React from 'react';
import FitnessDetails from '../../FitnessDetails/FitnessDetails.component';
import TicketItem from '../../TicketItem/TicketItem.component';

// import './SingleBusLeft.module.css'
const TicketSell = dynamic(
	() => import( '../../TicketSell/TicketSell'),
	{
		ssr: false,
	}
);
const SingleBusLeft = () => {
    return (
        <div className='my-6'>
            <div className="btn-group shadow-lg">
                <button href='/SingleBusRoute/BusFitness/Bus' className="btn hover:bg-slate-300 normal-case bg-zinc-200 border-zinc-400 text-black">Bus Fitness</button>
                <button className="btn hover:bg-slate-300 normal-case bg-zinc-200 border-zinc-400 text-black">Ticket Sell Statistics</button>
                <button className="btn hover:bg-slate-300 normal-case bg-zinc-200 border-zinc-400 text-black">Ticket Info.</button>
                <button className="btn hover:bg-slate-300 normal-case bg-zinc-200 border-zinc-400 text-black">Bus Schedule</button>
            </div>
            <div className='my-10'>
                <h3 className='text-2xl font-bold mb-8'>Ticket sell Statistics</h3>
            <TicketSell />
			</div>
        </div>
    );
};

export default SingleBusLeft;