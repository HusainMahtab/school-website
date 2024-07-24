// src/components/HomePage.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const HomePage = () => {
  const highlights = [
    {
      title: 'Annual Sports Day',
      description: 'Celebrating Excellence in Sports',
      image: 'https://img.freepik.com/free-vector/national-sports-day-illustration_23-2148994969.jpg?size=626&ext=jpg&ga=GA1.1.1260021212.1721818151&semt=ais_user',
    },
    {
      title: 'Science Exhibition',
      description: 'Showcasing Student Innovations',
      image: 'https://img.freepik.com/free-vector/realistic-science-facebook-template_23-2149484319.jpg?size=626&ext=jpg&ga=GA1.1.1260021212.1721818151&semt=ais_user',
    },
    {
      title: 'Cultural Fest',
      description: 'Embracing Diversity and Creativity',
      image: 'https://img.freepik.com/free-vector/invitation-template-holi-festival-celebration_23-2150144724.jpg?size=626&ext=jpg&ga=GA1.1.1260021212.1721818151&semt=ais_user',
    },
  ];

  return (
    <div className="bg-gray-100">
      <header className="py-12 text-center">
        <img src="https://media.istockphoto.com/id/1867127318/photo/square-root-icon-flat-style-design-isolated-on-black-background-3d-rendering-wireframe.webp?b=1&s=170667a&w=0&k=20&c=lwNgErE10SfXSZzo5fILmk2wdgDTJanMPFkbHlS6AOs=" alt="Springdale Public School Logo" className="mx-auto mb-4 w-26 h-16 rounded-full" />
        <h1 className="text-4xl font-bold mb-2">Springdale Public School</h1>
        <p className="text-xl text-gray-700">
          Welcome to Springdale Public School, where we nurture young minds for a brighter future.
        </p>
      </header>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Highlights</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            navigation
            loop={true}
          >
            {highlights.map((highlight, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-96">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-4 text-white">
                    <h3 className="text-2xl font-semibold">{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
