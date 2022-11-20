import dynamic from 'next/dynamic';
import React from 'react';

const FitnessDetails = dynamic(
	() => import( '../../../FitnessDetails/FitnessDetails.component'),
	{
		ssr: false,
	}
);
const BusFitness = () => {
    return (
        <div>
            <FitnessDetails />
        </div>
    );
};

export default BusFitness;