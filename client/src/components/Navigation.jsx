import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';

const Navigation = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Link to="/" className="flex px-2 uppercase hover:text-cyan-700">
          <AiOutlineHome className="text-2xl" />
          <span className="self-center text-xl">Home</span>
        </Link>
        <Link to="/view" className='flex mx-2 uppercase hover:text-cyan-700'>
          <AiOutlineSearch className="text-2xl" />
          <span className="self-center text-xl">View</span>
        </Link>
      </div>
    </div>
  );
}

export default Navigation