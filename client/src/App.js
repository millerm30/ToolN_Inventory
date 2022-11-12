import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import ToolList from './components/ToolList';
import AddTools from './components/AddTools';
import Main from './components/Main';
import Contact from './components/Contact';

function App() {
  const [ isAuthenticated , setIsAuthenticated ] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:3010/auth/verify", {
        method: "GET",
        headers: { token: localStorage.token }
      });
      const parseData = await response.json();
      parseData === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    isAuth()
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<Dashboard setAuth={setAuth} />}>
            <Route path="" element={<Main />} />
            <Route path="/add" element={<AddTools />} />
            <Route path="/view" element={<ToolList />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        ) : (
          <Route path="/" element={<Login setAuth={setAuth} />} />
        )}
        <Route path="/register" element={<Register setAuth={setAuth} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
