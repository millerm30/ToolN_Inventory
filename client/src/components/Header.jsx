import React, { Fragment } from 'react';
import toolLogo from '../assets/appLogo.png';
import appName from '../assets/appName.png';
import UserInfo from './UserInfo';
import Navigation from './Navigation';

const Header = ({name, logout}) => {
  return (
    <Fragment>
      <div className='flex justify-between bg-white pt-1 pb-4'>
        <div className='flex'>
          <img
            src={toolLogo}
            alt='logo'
            className='h-10 w-10 ml-2 self-center'
          />
          <img src={appName} alt='ToolN' className='w-36 ml-2 self-center' />
        </div>
        <UserInfo name={name} logout={logout} />
      </div>
      <Navigation />
    </Fragment>
  );
};

export default Header;
