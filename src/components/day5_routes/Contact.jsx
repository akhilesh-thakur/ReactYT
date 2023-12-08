// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
