// src/components/Gallery.jsx
import React from 'react';

const Gallery = () => {
  const photos = [
    {
      src: 'https://media.istockphoto.com/id/1428669396/photo/group-of-happy-soccer-fans-taking-selfie-with-smart-phone.webp?b=1&s=170667a&w=0&k=20&c=06E6K1Tjl_Sb7rnCkLjYsO2v14_XTyfAoPZhFIfgZas=',
      alt: 'sports events.',
      caption: 'Students participating in various sports events.',
    },
    {
      src: 'https://media.istockphoto.com/id/1367212213/photo/girl-with-test-tube-and-enthusiastic-children-with-teacher.webp?b=1&s=170667a&w=0&k=20&c=O0gYikR3z7DpjAmy0i-p5IlhKugongYDPMrFY9aF97A=',
      alt: ' science projects.',
      caption: 'Students presenting their science projects.',
    },
    {
      src: 'https://media.istockphoto.com/id/587206070/photo/portrait-of-happy-litttle-girl-on-holi-color-festival.webp?b=1&s=170667a&w=0&k=20&c=p3ZUeFLVYhUPuXcdTPvWzghy9iNMzIc1W_mlMKjjf-0=',
      alt: 'cultural fest',
      caption: 'Students performing in the cultural fest.',
    },
    {
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3Nyb29tfGVufDB8fDB8fHww',
      alt: 'classrooms.',
      caption: 'A glimpse of our interactive classrooms.',
    },
    {
      src: 'https://media.istockphoto.com/id/1498878143/photo/book-stack-and-open-book-on-the-desk-in-modern-public-library.webp?b=1&s=170667a&w=0&k=20&c=T63zJBKuZLTUQwwAAwLzbMwtzAEdd4wZRaEV6EAdUnA=',
      alt: 'school library.',
      caption: 'Students reading and studying in the school library.',
    },
  ];

  const videos = [
    {
      src: '/assets/school_tour.mp4',
      caption: 'Virtual tour of Springdale Public School.',
    },
    {
      src: '/assets/annual_function.mp4',
      caption: 'Highlights from the Annual Function 2023.',
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Gallery
        </h2>

        {/* Photo Gallery */}
        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
            Photos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-700">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Gallery */}
        <section>
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
            Videos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
              >
                <video
                  controls
                  className="w-full h-64 object-cover"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <p className="text-gray-700">{video.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
