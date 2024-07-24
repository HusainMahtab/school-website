// src/components/Map.jsx
import React from 'react';

const Map = () => {
  return (
    <div className="h-64 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.839048774023!2d144.95373531531852!3d-37.81627997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779d0fc2d63d0a!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1636979441933!5m2!1sen!2sus"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
