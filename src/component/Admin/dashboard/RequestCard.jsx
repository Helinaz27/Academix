import React from 'react'
import CardForprogess from './CardForprogess'

function RequestCard() {
  return (
    <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols gap-6 m-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
               <h1>ll</h1>
               <h3>Request</h3>
                <p>1000</p>

                {
                //   buttons for excepting and rejecting the request
                }
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Accept</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reject</button>
                
               <br />
                <h3 className="font-semibold text-lg mb-2">Request</h3>
                <div className="flex gap-10">

              </div>
         </div>
         </div>   
       
         </div>

    </div>
  )
}

export default RequestCard