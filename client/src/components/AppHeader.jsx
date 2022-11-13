import React from 'react';
import toolLogo from '../assets/appLogo.png';
import appName from '../assets/appName.png';

const AppHeader = () => {
  return (
    <div className='flex my-4 justify-center flex-wrap flex-row mb-6'>
      <img src={toolLogo} alt='tool logo' className='w-1/4 md:w-fit lg:w-fit' />
      <img src={appName} alt='tool logo' className='w-2/3 md:w-fit lg:w-fit' />
    </div>
  )
};

export default AppHeader;