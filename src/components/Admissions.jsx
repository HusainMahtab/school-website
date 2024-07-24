// src/components/Admissions.jsx
import React from 'react';

const Admissions = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Admissions</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          <p className="text-gray-700 mb-4">
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </p>
          
          <h3 className="text-xl font-semibold mb-2">Admission Criteria</h3>
          <p className="text-gray-700 mb-4">
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </p>

          <h3 className="text-xl font-semibold mb-2">Important Dates</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            <li><strong>Admission Form Availability:</strong> March 1st</li>
            <li><strong>Last Date for Submission:</strong> March 31st</li>
            <li><strong>Entrance Test:</strong> April 15th</li>
            <li><strong>Announcement of Results:</strong> April 30th</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Download Forms</h3>
          <a
            href="/downloads/admission_form.pdf"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            download
          >
            Download Admission Form
          </a>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
