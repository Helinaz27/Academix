import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StudentsData from './StudentsData';
import UsersList from './UsersList.jsx';
import { FaSearch } from "react-icons/fa";

const SearchHeaderforUsers = () => {
    
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };

    const filteredStudents = StudentsData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between">
        <h1 className='text-black font-serif font-bold text-2xl text-left mt-6 p-3 flex justify-start'>Users</h1>
        <div className="relative mt-11">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input 
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-10 py-2 text-xl font-serif border-[2px] h-[2.5rem] w-full rounded-lg border-gray-300  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className='flex px-2 items-right mt-6 p-3'>
          <select className="border border-gray-300 bg-gray-100 rounded-md py-1 px-2">
            <option value="student">Student</option>
            <option value="Student Union">Student Union</option>
            <option value="Representative">Representative</option>
          </select>
        </div>
      </div>
      {searchTerm && (
        <div>
          <div className="flex justify-between bg-gray-100 px-4 pt-5 pb-4 rounded-xl border border-gray-200  flex-1 m-2 p-6 ">
            <div className='mt-3'>
              <table className="w-full text-gray-700 min-w-full divide-y divide-gray-200 ">
                <thead className=''>
                  <tr className='text-gray-400 text-left py-4'>
                    <th className="w-1/6">NAME</th>
                    <th className="w-1/6">DEPARTMENT</th>
                    <th className="w-1/6">ID NUMBER</th>
                    <th className="w-1/6">GENDER</th>
                    <th className="w-1/6">ROLE</th>
                    <th className="w-1/6">PHONE NUMBER</th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200  '>
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className='text-gray-500 text-left py-4'>
                      <td className="font-bold">{student.name}</td>
                      <td>{student.department}</td>
                      <td>{student.IdNumber}</td>
                      <td>{student.Gender}</td>
                      <td>{student.Role}</td>
                      <td>{student.PhoneNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {!searchTerm && <UsersList />}
    </div>
  );
};

export default SearchHeaderforUsers;