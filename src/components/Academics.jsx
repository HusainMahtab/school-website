// src/components/Academics.jsx
import React from 'react';

const Academics = () => {
  const curriculum = {
    primary: [
      'English',
      'Mathematics',
      'Science',
      'Social Studies',
      'Art',
      'Physical Education',
    ],
    secondary: [
      'English',
      'Mathematics',
      'Science (Physics, Chemistry, Biology)',
      'Social Studies',
      'Computer Science',
      'Physical Education',
      'Art',
    ],
    seniorSecondary: {
      scienceStream: [
        'Physics',
        'Chemistry',
        'Biology',
        'Mathematics',
        'Computer Science',
        'English',
      ],
      commerceStream: [
        'Accountancy',
        'Business Studies',
        'Economics',
        'Mathematics',
        'English',
      ],
    },
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Academics
        </h2>

        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
            Curriculum
          </h3>

          <div className="space-y-10">
            <div className='border rounded-md shadow-lg p-2'>
              <h4 className="text-2xl font-semibold text-gray-700 mb-4">
                Primary (Grades 1-5)
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 pl-5">
                {curriculum.primary.map((subject, index) => (
                  <li key={index} className="pl-2">{subject}</li>
                ))}
              </ul>
            </div>

            <div className='border rounded-md shadow-lg p-2'>
              <h4 className="text-2xl font-semibold text-gray-700 mb-4">
                Secondary (Grades 6-10)
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 pl-5">
                {curriculum.secondary.map((subject, index) => (
                  <li key={index} className="pl-2">{subject}</li>
                ))}
              </ul>
            </div>

            <div className='border rounded-md shadow-lg p-2'>
              <h4 className="text-2xl font-semibold text-gray-700 mb-4">
                Senior Secondary (Grades 11-12)
              </h4>
              
              <div className="ml-6 space-y-6">
                <div>
                  <h5 className="text-xl font-semibold text-gray-700 mb-2">
                    Science Stream
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 pl-5">
                    {curriculum.seniorSecondary.scienceStream.map((subject, index) => (
                      <li key={index} className="pl-2">{subject}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-xl font-semibold text-gray-700 mb-2">
                    Commerce Stream
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 pl-5">
                    {curriculum.seniorSecondary.commerceStream.map((subject, index) => (
                      <li key={index} className="pl-2">{subject}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
            Teaching Methodologies
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles. Our approach is designed to engage students actively and encourage them to explore, discover, and learn through hands-on experiences and collaborative projects.
          </p>
        </section>

        <section>
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
            Educational Resources
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Springdale Public School, students have access to digital classrooms, interactive learning modules, and online educational platforms. These resources provide students with the tools they need to succeed in a dynamic and ever-changing world.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Academics;
