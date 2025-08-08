import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Log <span className="text-indigo-500">In</span>
          </h2>
          <p className="text-sm text-gray-500 mt-2">Welcome back! Please log in to your account</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password*</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <a href="#" className="hover:underline text-indigo-600 font-medium">
              Forgot Password?
            </a>
            <a href="#" className="hover:underline text-indigo-600 font-medium">
              Register
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
