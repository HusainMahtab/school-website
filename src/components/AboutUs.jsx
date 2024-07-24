// src/components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  const infrastructure = [
    "State-of-the-art science and computer labs",
    "Spacious and well-equipped classrooms",
    "Library with a vast collection of books and digital resources",
    "Sports facilities including a playground, gymnasium, and swimming pool",
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        
        <section className="mb-12 border shadow-lg rounded-md p-2 bg-blue-400">
          <h3 className="text-2xl font-semibold mb-2">History</h3>
          <p className="text-white">
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
          </p>
        </section>

        <section className="mb-12 border shadow-lg rounded-md p-2 bg-purple-400">
          <h3 className="text-2xl font-semibold mb-2">Vision</h3>
          <p className="text-white">
            To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
          </p>
        </section>

        <section className="mb-12 border shadow-lg rounded-md p-2 bg-gray-400">
          <h3 className="text-2xl font-semibold mb-2">Mission</h3>
          <p className="text-white">
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
          </p>
        </section>

        <section className="mb-12 border shadow-lg rounded-md p-2 bg-slate-400">
          <h3 className="text-2xl font-semibold mb-2">Principal's Message</h3>
          <p className="text-white">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
          </p>
        </section>

        <section className="mb-12 border shadow-lg rounded-md p-2 bg-green-400">
          <h3 className="text-2xl font-semibold mb-4">Infrastructure and Facilities</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {infrastructure.map((facility, index) => (
              <li key={index} className='text-white'>{facility}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
