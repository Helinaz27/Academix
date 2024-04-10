import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    student_id: '',
    academic_year: '',
    password: '',
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to the API endpoint
    try {
      const response = await axios.post('http://54.237.124.13:8000/user/', formData);
      console.log('User created:', response.data);
      // Optionally, you can redirect the user or show a success message
    } catch (error) {
      console.error('Error creating user:', error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        <p className="text-lg text-center text-gray-700 mb-6 italic">
          <em>Unlock your potential with our user-friendly platform, designed to streamline learning and resource sharing for students and administrators alike.</em>
        </p>
        <h2 className="text-3xl text-center text-gray-900 mb-6">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded required" name="first_name" placeholder="First Name" onChange={handleInputChange} />
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded" name="last_name" placeholder="Last Name" onChange={handleInputChange} />
          </div>
          
          <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded" name="email" placeholder="Email" onChange={handleInputChange} />
          <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded" name="username" placeholder="username" onChange={handleInputChange} />
          <input type="number" className="w-full px-4 py-3 border border-gray-300 rounded" name="phone_number" placeholder="Phone Number" onChange={handleInputChange} />
          <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded" name="student_id" placeholder="Student ID" onChange={handleInputChange} />
          <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded" name="academic_year" placeholder="Academic Year" onChange={handleInputChange} />
          <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded" name="password" placeholder="Password" onChange={handleInputChange} />
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-700">I accept the <a href="#" className="text-purple-600 font-bold hover:underline">Terms of Use</a> & <a href="#" className="text-purple-600 font-bold hover:underline">Privacy Policy</a></span>
          </div>
          <button type="submit" className="w-full py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
