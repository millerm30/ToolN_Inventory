import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppHeader from './AppHeader';

const Register = ({setAuth}) => {
  const [inputs, setInput] = useState({
    email: '',
    password: '',
    name: ''
  });

  const { email, password, name } = inputs;

  const onChange = e => {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  };

 const registerNewUser = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Registered Successfully");
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
      <ToastContainer />
      <AppHeader title="Tool Inventory" />
      <div className="flex flex-col">
        <form
          className="flex flex-col w-3/4 self-center bg-white p-6 rounded-xl border-2 shadow-md md:w-1/2 lg:w-1/3"
          onSubmit={registerNewUser}
        >
          <h2 className="text-center text-2xl font-semibold">Registration</h2>
          <label
            className="text-sm font-semibold text-gray-600 mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Please enter your name..."
            className="border border-gray-400 p-2 rounded mb-4"
            value={name}
            onChange={(e) => onChange(e)}
            autoComplete="off"
          />
          <label
            className="text-sm font-semibold text-gray-600 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Please enter your email..."
            className="border border-gray-400 p-2 rounded mb-4"
            value={email}
            onChange={(e) => onChange(e)}
            autoComplete="off"
          />
          <label
            className="text-sm font-semibold text-gray-600 mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Please enter your password..."
            className="border border-gray-400 p-2 rounded mb-4"
            value={password}
            onChange={(e) => onChange(e)}
            autoComplete="off"
          />
          <button
            disabled={!email || !password || !name}
            className={`${"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded my-4"}
              ${!email || !password || !name ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            Register
          </button>
        </form>
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 text-center my-5"
        >
          Back to Login
        </Link>
      </div>
    </Fragment>
  );
}

export default Register