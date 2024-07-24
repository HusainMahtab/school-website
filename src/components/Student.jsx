// src/components/Students.jsx
import React from 'react';

const Students = () => {
  const extracurricularActivities = [
    'Music',
    'Dance',
    'Drama',
    'Art',
    'Sports',
    'Robotics',
    'Debate Club',
    'Science Club',
  ];

  const clubsAndSocieties = [
    'Literary Society',
    'Environmental Club',
    'Astronomy Club',
    'Coding Club',
  ];

  const achievements = [
    {
      name: 'John Smith',
      description: 'National Level Math Olympiad Winner',
    },
    {
      name: 'Sarah Lee',
      description: 'Gold Medalist in State Swimming Championship',
    },
    {
      name: 'Tech Innovators Club',
      description: 'Winners of Inter-School Robotics Competition',
    },
  ];

  const studentCouncil = {
    president: 'Amy Parker, Grade 12',
    vicePresident: 'Rajiv Mehta, Grade 11',
    secretary: 'Lisa Wong, Grade 10',
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Student Life
        </h2>

        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
            Life at Springdale
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h4 className="text-2xl font-semibold text-gray-700 mb-4">
                Extracurricular Activities
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2 pl-5">
                {extracurricularActivities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-gray-700 mb-4">
                Clubs and Societies
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2 pl-5">
                {clubsAndSocieties.map((club, index) => (
                  <li key={index}>{club}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
            Achievements
          </h3>
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-800">
                  {achievement.name}
                </h4>
                <p className="text-gray-600">{achievement.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
            Student Council
          </h3>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <h4 className="text-xl font-bold text-gray-800">President</h4>
              <p className="text-gray-600">{studentCouncil.president}</p>
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-bold text-gray-800">Vice President</h4>
              <p className="text-gray-600">{studentCouncil.vicePresident}</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800">Secretary</h4>
              <p className="text-gray-600">{studentCouncil.secretary}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Students;
