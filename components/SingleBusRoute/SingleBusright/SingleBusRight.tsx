import React from 'react';

const SingleBusRight = () => {
  return (
    <div>
      {/* **** For Driver Information ***** */}
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold">Diver Information</h2>
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto my-6">
              {/* Set driver img here  */}
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          {/* Set name here */}
          <p className='text-lg'>Name: Saidir Jaman</p>
          {/* Set age here */}
          <p className='text-lg'>Age: 34 years</p>
          {/* Set phone number here */}
          <p className='text-lg'>Contact: 017567667587</p>
          <div className="card-actions justify-end mt-4">
            {/* Set deatils link here */}
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>


    {/* **** For Contactor Information ***** */}
      <div className="card w-96 bg-base-100 shadow-xl my-10">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold">Contactor Information</h2>
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto my-6">
              {/* Set driver img here  */}
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          {/* Set name here */}
          <p className='text-lg'>Name: Kamal Hossain</p>
          {/* Set age here */}
          <p className='text-lg'>Age: 25 years</p>
          {/* Set phone number here */}
          <p className='text-lg'>Contact: 0177637544</p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SingleBusRight;