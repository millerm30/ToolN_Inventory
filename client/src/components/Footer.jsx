import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-white border-t-2 mt-2" id="footerContainer">
      <div className="container mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mt-2">
            <p className="text-center text-sm text-gray-600 px-4">
              &copy; 2022. Designed by Michael Miller.
            </p>
          </div>
          <div>
            <ul className="flex justify-center list-none md:justify-end mt-2">
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gray-800 text-sm px-4 py-2"
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer