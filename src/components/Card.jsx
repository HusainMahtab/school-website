// src/components/Card.jsx
import React from 'react';

const Card = ({ title, description, image, link, buttonText }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      {image && (
        <img
          className="h-48 w-full object-cover"
          src={image}
          alt={title}
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        {link && buttonText && (
          <a
            href={link}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
