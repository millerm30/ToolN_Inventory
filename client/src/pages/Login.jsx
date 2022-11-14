import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({setAuth}) => {
  const [inputs, setInput] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState('');

  const { email, password } = inputs;

  const onChange = e => {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleEeyeChange = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch('http://localhost:3010/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const parseRes = await response.json();
      if (parseRes.token) {
        localStorage.setItem('token', parseRes.token);
        setAuth(true);
        toast.success('Logged in successfully');
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <AppHeader />
      <div className='flex flex-col'>
        <form
          className='flex flex-col w-5/6 self-center bg-white p-6 rounded-xl border-2 shadow-md md:w-1/2 lg:w-1/3'
          onSubmit={onSubmitForm}
        >
          <h2 className='text-center text-2xl font-semibold'>Login</h2>
          <label
            className='text-sm font-semibold text-gray-600 mb-1'
            htmlFor='email'
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            placeholder='Please enter your email...'
            className='border border-gray-400 p-2 rounded mb-4'
            value={email}
            onChange={(e) => onChange(e)}
            autoComplete='off'
          />
          <span className='flex flex-row justify-between mb-1'>
            <label
              className='text-sm font-semibold text-gray-600'
              htmlFor='password'
            >
              Password
            </label>
            <button
              className='font-semibold text-gray-600 text-2xl'
              onClick={handleEeyeChange}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </span>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='Please enter your password...'
            className='border border-gray-400 p-2 rounded mb-4'
            value={password}
            onChange={(e) => onChange(e)}
            autoComplete='off'
          />
          <button
            disabled={!email || !password}
            className={`${'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded my-4'} ${
              !email || !password
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer'
            }`}
          >
            Login
          </button>
        </form>
        <div className='my-5 flex justify-center'>
          <h3>Don't have an account?</h3>
          <Link
            to='/register'
            className='text-blue-500 hover:text-blue-700 text-center mx-1'
          >
            Register
          </Link>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default Login;