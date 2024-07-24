// src/components/Carousel.jsx
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-item">
        <LazyLoadImage
          src="/assets/sports_day.jpg"
          alt="Sports Day"
          effect="blur"
          className="w-full h-64 object-cover"
        />
        <div className="carousel-caption">
          <h2>Annual Sports Day</h2>
          <p>Celebrating Excellence in Sports</p>
        </div>
      </div>
      <div className="carousel-item">
        <LazyLoadImage
          src="/assets/science_exhibition.jpg"
          alt="Science Exhibition"
          effect="blur"
          className="w-full h-64 object-cover"
        />
        <div className="carousel-caption">
          <h2>Science Exhibition</h2>
          <p>Showcasing Student Innovations</p>
        </div>
      </div>
      <div className="carousel-item">
        <LazyLoadImage
          src="/assets/cultural_fest.jpg"
          alt="Cultural Fest"
          effect="blur"
          className="w-full h-64 object-cover"
        />
        <div className="carousel-caption">
          <h2>Cultural Fest</h2>
          <p>Embracing Diversity and Creativity</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
