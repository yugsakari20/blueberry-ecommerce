import React from 'react'

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">Create an Account</h2>
          <p className="text-gray-500">Join us and explore the marketplace</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="+1234567890"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="123 Main St"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City<span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500">
              <option>City 1</option>
              <option>City 2</option>
            </select>
          </div>

          {/* Post Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Post Code<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="123456"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country<span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500">
              <option>Country 1</option>
              <option>Country 2</option>
            </select>
          </div>

          {/* Region / State */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Region / State<span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500">
              <option>State 1</option>
              <option>State 2</option>
            </select>
          </div>

          {/* Register Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-blue-900 text-white px-8 py-2 rounded-md hover:bg-gray-900 transition"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
