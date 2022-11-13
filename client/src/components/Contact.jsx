import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [ inputs, setInputs ] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [ status, setStatus ] = useState('Submit');

  const { name, email, message } = inputs;

  const onChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = inputs;
    let details = {
      name,
      email,
      message
    };
    let response = await fetch('http://localhost:3010/contact/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8', token: localStorage.token
      },
      body: JSON.stringify(details)
    });
    setStatus('Submit');
    setInputs({
      name: '',
      email: '',
      message: ''
    });
    let result = await response.json();
    toast.success(result.status + ', Thanks for contacting us!📧');
  };

  return (
    <div className ='bg-hero-pattern bg-no-repeat bg-center bg-cover bg-blend-luminosity bg-cyan-900' id='mainContainer'>
      <h3 className='text-center py-4 text-2xl font-extrabold'>Contact Us</h3>
      <form className='flex flex-col w-3/4 ml-auto mr-auto mb-8 bg-[#f8f8f8] p-6 rounded-xl border-2 border-black md:w-1/2 lg:w-1/3' onSubmit={handleSubmit}>
        <div className='flex flex-col mb-4'>
          <label
            className='text-sm font-semibold text-gray-600 mb-1'
            htmlFor='name'
          >
            Name
          </label>
          <input
            className='border-2 border-gray-300 rounded-md p-2 mb-2'
            type='text'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required
            placeholder='Enter your name...'
          />
          <label
            className='text-sm font-semibold text-gray-600 mb-1'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='border-2 border-gray-300 rounded-md p-2 mb-2'
            type='email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
            placeholder='Enter your email...'
          />
          <label
            className='text-sm font-semibold text-gray-600 mb-1'
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            className='border-2 border-gray-300 rounded-md p-2 mb-2 resize-none'
            name='message'
            value={message}
            onChange={e => onChange(e)}
            rows='5'
            required
            placeholder='Enter your message...'
          >
          </textarea>
          <button
            disabled={name === '' || email === '' || message === ''}
            className='bg-blue-500 hover:bg-blue-700 text-white rounded-md p-2 my-2 disabled:opacity-50 disabled:cursor-not-allowed'
            type='submit'
          >
            {status}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;