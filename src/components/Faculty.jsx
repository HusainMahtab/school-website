// src/components/Faculty.jsx
import React from 'react';

const facultyData = [
  {
    name: 'John Doe',
    position: 'Principal',
    qualification:'M.Ed',
    experience:"20 years of experience in educational administration",
    image: 'https://img.freepik.com/free-photo/portrait-female-teacher-holding-notepad-green_140725-149620.jpg?w=740&t=st=1721818186~exp=1721818786~hmac=c2dbbc72762638df84d5aac7a22c016d55374511fa9520416a305327307d9119',
  },
  {
    name:'Jane Smith',
    position:'Vice Principal',
    qualification:'M.Sc. in Physics',
    experience:"15 years of teaching experience",
    image: 'https://t3.ftcdn.net/jpg/01/79/77/52/240_F_179775249_mlkJtITkCQckGZ7LMEVXic0CmrvWeNVH.jpg',
  },
  {
    name:'Emily Johnson',
    position:'English Teacher',
    qualification: 'M.A. in English',
    experience:"10 years of teaching experience",
    image: 'https://img.freepik.com/free-photo/young-tender-curly-girl-holding-documents_176420-239.jpg?w=740&t=st=1721818334~exp=1721818934~hmac=d37deb634899b72da569cb05205b0ef725e618197378ee941c178f5dc6b5e65c',
  },
  
  {
    name:'Sophia Davis',
    position:'Science Teacher',
    qualification:'M.Sc. in Chemistry',
    experience:'12 years of teaching experience',
    image: 'https://img.freepik.com/free-photo/businessman-black-suit-holding-his-tasklist-makes-thumb-up_114579-15902.jpg?w=740&t=st=1721818361~exp=1721818961~hmac=45f86ac08f78f65799172252d2894d589bb45c3a1c30034684b73c9da091c8e5',
  },
  {
    name:'David Wilson',
    position:'Computer Science Teacher',
    qualification:'B.Tech in Computer Science',
    experience:' 5 years of teaching experience',
    image: 'https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?w=740&t=st=1721818651~exp=1721819251~hmac=b619ffdca195d81c8fe01d21e63af276355c56c82cf048faccd63034da8cac3d',
  },


  // Add more faculty members here
];

const Faculty = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Faculty</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyData.map((faculty, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src={faculty.image} alt={faculty.name} className="h-40 w-full object-cover rounded-t-md" />
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{faculty.name}</h2>
                <p className="text-gray-600">{faculty.position}</p>
                <p className="text-gray-600">{faculty.qualification}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
