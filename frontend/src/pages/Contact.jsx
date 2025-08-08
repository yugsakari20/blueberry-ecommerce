import React from 'react'

const Contact = () => {
  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Get In <span className="text-indigo-500">Touch</span>
        </h2>
        <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
          Please select a topic below related to you inquiry. If you don’t find what you need, fill out our contact form.
        </p>
      </div>

      {/* Main Contact Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl">
        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter Your First Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            rows="4"
            placeholder="Please leave your comments here.."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Submit
          </button>
        </form>

        {/* Google Map */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.084394459411!2d72.53134871496777!3d23.094870584922776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e5df6c68f5%3A0x727f6cd48b7e48b9!2sShivdhara%20Skylight!5e0!3m2!1sen!2sin!4v1693563942446!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[500px] border-0"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact