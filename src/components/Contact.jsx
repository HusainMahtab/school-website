
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

  
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setFormStatus('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-4">
              We would love to hear from you! Please fill out the form below or
              contact us using the information provided.
            </p>

            <ul className="list-none text-gray-700 space-y-3">
              <li>
                <strong>Address:</strong> Springdale Public School, 123
                Education Lane, Cityville, State, ZIP Code
              </li>
              <li>
                <strong>Phone:</strong> +1 (123) 456-7890
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@springdale.edu" className="text-blue-500 hover:underline">
                  info@springdale.edu
                </a>
              </li>
            </ul>

            {/* Google Maps */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509428!2d144.9537353153513!3d-37.81627974202166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7d7f7f3d7d7!2sEducation%20Lane!5e0!3m2!1sen!2sus!4v1625412345678!5m2!1sen!2sus"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                title="Springdale Public School Location"
                className="rounded-lg border-2 border-gray-300"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder='Enter Name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-2 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder='Enter Email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-2 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message:
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder='Enter Your Message'
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-2 py-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
            {formStatus && (
              <p className="text-green-600 mt-4">{formStatus}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
