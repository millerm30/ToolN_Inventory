import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineFileAdd } from 'react-icons/ai';

const Navigation = () => {
  return (
      <div className='flex justify-between border-b-2 border-b-black py-1 shadow-md bg-white'>
        <div>
          <Link to='/' className='flex px-2 uppercase hover:text-cyan-700'>
            <AiOutlineHome className='text-2xl' />
            <span className='text-lg'>Home</span>
          </Link>
        </div>
        <div className='flex'>
          <Link to='/add' className='flex px-2 uppercase hover:text-cyan-700'>
            <AiOutlineFileAdd className='text-2xl' />
            <span className='text-lg'>Add</span>
          </Link>
          <Link to='/view' className='flex mx-2 uppercase hover:text-cyan-700'>
            <AiOutlineSearch className='text-2xl' />
            <span className='text-lg'>View</span>
          </Link>
        </div>
      </div>
  );
};

export default Navigation;