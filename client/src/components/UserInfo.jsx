import React from 'react';
import { RiLogoutBoxRLine } from 'react-icons/ri';

const UserInfo = ({logout, name}) => {
  return (
    <div className='flex flex-col mr-2'>
      <h2 className='text-center text-lg'>Welcome: {name}</h2>
      <button
        className='flex flex-row justify-end items-center hover:text-red-600'
        onClick={(e) => logout(e)}
      >
        <RiLogoutBoxRLine className='text-2xl' />
        <span className='ml-2'>Logout</span>
      </button>
    </div>
  );
};

export default UserInfo;