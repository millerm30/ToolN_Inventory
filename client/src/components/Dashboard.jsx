import React, { Fragment, useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppLogo from '../assets/appLogo.png'
import { RiLogoutBoxRLine } from 'react-icons/ri';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const Dashboard = ({setAuth}) => {
  const [name, setName] = useState('');

  const getProfile = async () => {
    try {
      const res = await fetch('http://localhost:3000/dashboard/', {
        method: 'GET',
        headers: { token: localStorage.token }
      });
      const parseData = await res.json();
      setName(parseData.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setAuth(false);
    toast.success('Logged out successfully');
    window.location = '/';
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Fragment>
      <ToastContainer />
      <div className="flex flex-col border-b-2">
        <div className="flex flex-row justify-between py-4">
          <div className='flex ml-2'>
            <img src={AppLogo} alt="App Logo" className='w-10 h-10 self-center' />
            <h1 className="text-2xl font-semibold self-center ml-2">Inventory</h1>
          </div>
          <div className="flex flex-col mr-2">
            <h2 className="text-center text-lg">Welcome: {name}</h2>
            <button className="flex flex-row justify-end items-center" onClick={e => logout(e)}>
              <RiLogoutBoxRLine className="text-2xl hover:text-red-600" />
              <span className="ml-2">Logout</span>
            </button>
          </div>
        </div>
        <Navigation />
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Dashboard