// src/components/Footer.jsx
import React from 'react';
import { FaFacebook,FaTwitter,FaInstagramSquare } from "react-icons/fa";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h4 className="font-bold">Springdale Public School</h4>
            <p>123 Education Lane, Cityville, State, ZIP Code</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: info@springdale.edu</p>
          </div>
          <div>
            <p>Follow Us:</p>
            <div className="flex space-x-4">
              <Link to={""}><i className="fab fa-facebook"><FaFacebook/>facebook</i></Link>
              <Link to={""}><i className="fab fa-twitter"><FaTwitter/>twitter</i></Link>
              <Link to={""}><i className="fab fa-instagram"><FaInstagramSquare/>instagram</i></Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          &copy; 2024 Springdale Public School. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
