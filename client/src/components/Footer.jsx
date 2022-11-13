import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-[#f8f8f8] border-t-2 border-black' id='footerContainer'>
      <div className='container mx-auto'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='mt-2 flex flex-row justify-center'>
            <p className='text-center text-sm text-gray-600 px-4'>
              &copy; 2022. Designed by Michael Miller.
            </p>
            <a href='https://www.github.com/millerm30' target='_blank' rel='noreferrer'>
              <BsGithub className='text-2xl text-gray-600 hover:text-gray-800 mx-2 hover:scale-125 transition duration-500' />
            </a>
            <a href='https://www.linkedin.com/in/michael-miller-0aa2bb229/' target='_blank' rel='noreferrer'>
              <BsLinkedin className='text-2xl text-gray-600 hover:text-gray-800 mx-2 hover:scale-125 transition duration-500' />
            </a>
          </div>
          <div>
            <ul className='flex justify-center list-none md:justify-end mt-2'>
              <Link
                to='/contact'
                className='text-gray-600 hover:text-gray-800 text-sm px-4 py-2'
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;