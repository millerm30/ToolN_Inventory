import React, { Fragment, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Dashboard = ({setAuth}) => {
  const [name, setName] = useState('');

  const getProfile = async () => {
    try {
      const res = await fetch('http://localhost:3010/dashboard/', {
        method: 'GET',
        headers: { token: localStorage.token }
      });
      const parseData = await res.json();
      setName(parseData.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem('token');
      setAuth(false);
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Fragment>
      <Header title='TooliN' logout={logout} name={name} />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Dashboard;