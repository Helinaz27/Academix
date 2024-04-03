import React from 'react';
// import { CiPen, FiCalendar, FiBookOpen, FiUsers } from 'react-icons/fi'; // Importing icons

function Cards() {
 return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 m-20">
        <div className="bg-cyan-300 p-1 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-4">
            {/* <CiPen className="text-4xl mb-2" /> */}
            <br />
            <h3 className="font-semibold text-lg mb-2">Freshman Students</h3>
          </div>
          <p className="text-black text-xl ">1500</p>
          <a href="#" className="text-gray-600 hover:text-blue-500 block text-center mt-4">View More</a> {/* Using margin for spacing */}
        </div>
        {/* Repeat for other cards */}
        <div className="bg-lime-200 p-1 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-4">
            {/* <CiPen className="text-4xl mb-2" /> */}
            <br />
            <h3 className="font-semibold text-lg mb-2">Second year</h3>
          </div>
          <p className="text-black text-xl ">1500</p>
          <a href="#" className="text-gray-600 hover:text-blue-500 block text-center mt-4">View More</a> {/* Using margin for spacing */}
        </div>
        <div className="bg-red-300 p-1 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-4">
            {/* <CiPen className="text-4xl mb-2" /> */}
            <br />
            <h3 className="font-semibold text-lg mb-2">Third year</h3>
          </div>
          <p className="text-black text-xl ">1500</p>
          <a href="#" className="text-gray-600 hover:text-blue-500 block text-center mt-4">View More</a> {/* Using margin for spacing */}
        </div>
        <div className="bg-orange-400 p-1 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-4">
            {/* <CiPen className="text-4xl mb-2" /> */}
            <br />
            <h3 className="font-semibold text-lg mb-2">Fourth Year</h3>
          </div>
          <p className="text-black text-xl ">1500</p>
          <a href="#" className="text-gray-600 hover:text-blue-500 block text-center mt-4">View More</a> {/* Using margin for spacing */}
        </div>
        <div className="bg-amber-300  rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-4">
            {/* <CiPen className="text-4xl mb-2" /> */}
            <br />
            <h3 className="font-semibold text-lg mb-2">GC</h3>
          </div>
          <p className="text-black text-xl ">1500</p>
          <a href="#" className="text-gray-600 hover:text-blue-500 block text-center mt-4">View More</a> {/* Using margin for spacing */}
        </div>
        
        
      </div>
    </div>
 );
}

export default Cards;
