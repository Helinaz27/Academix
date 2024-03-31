import React from 'react';

const SignUp = () => {
  return (
    // Container for centering the form vertically and horizontally
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Form container */}
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        {/* Description */}
        <p className="text-lg text-center text-gray-700 mb-6 italic">
          <em>Unlock your potential with our user-friendly platform, designed to streamline learning and resource sharing for students and administrators alike.</em>
        </p>
        {/* Form heading */}
        <h2 className="text-3xl text-center text-gray-900 mb-6">Sign Up</h2>
        {/* Form */}
        <form className="space-y-4">
          {/* First name and last name inputs in a two-column grid on medium and larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded" placeholder="First Name" />
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded" placeholder="Last Name" />
          </div>
          {/* Email input */}
          <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded" placeholder="Email" />
          {/* Password inputs */}
          <input type="password" id="password" className="w-full px-4 py-3 border border-gray-300 rounded" placeholder="Password" />
          <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded" placeholder="Confirm Password" />
          {/* Terms and conditions checkbox */}
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-700">I accept the <a href="#" className="text-purple-600 font-bold hover:underline">Terms of Use</a> & <a href="#" className="text-purple-600 font-bold hover:underline">Privacy Policy</a></span>
          </div>
          {/* Sign up button */}
          <button className="w-full py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
