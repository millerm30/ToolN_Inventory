import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTools = () => {
  const [inputs, setInputs] = useState({
    tool_type: '',
    tool_brand: '',
    tool_model: '',
    tool_serial: ''
  });
  const [ addNewTool, setAddNewTool ] = useState('');

  const { tool_type, tool_brand, tool_model, tool_serial } = inputs;

  const onChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e, id) => {
    e.preventDefault();
    try {
      const body = { tool_type, tool_brand, tool_model, tool_serial };
      const response = await fetch(`http://localhost:3010/tools/addtool/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', token: localStorage.token },
        body: JSON.stringify(body)
      });
      const parseRes = await response.json();
      setAddNewTool(parseRes);
      setInputs({
        tool_type: '',
        tool_brand: '',
        tool_model: '',
        tool_serial: ''
      });
      toast.success('Tool Added Successfully');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div id="mainContainer">
      <h3 className="text-center my-4 text-lg font-semibold">Add Inventory</h3>
      <form className="flex flex-col w-3/4 ml-auto mr-auto mb-8 bg-white p-6 rounded-xl border-2 shadow-md md:w-1/2 lg:w-1/3" onSubmit={onSubmitForm}>
        <label
          htmlFor="tool_name"
          className="text-sm font-semibold text-gray-600 mb-1"
        >
          Tool Name
        </label>
        <input
          type="text"
          placeholder="Tool Type"
          name="tool_type"
          className="border-2 border-gray-300 rounded-md p-2 mb-2"
          onChange={(e) => onChange(e)}
          value={tool_type}
        />
        <label
          htmlFor="tool_brand"
          className="text-sm font-semibold text-gray-600 mb-1"
        >
          Tool Brand
        </label>
        <input
          type="text"
          placeholder="Tool brand"
          name="tool_brand"
          className="border-2 border-gray-300 rounded-md p-2 mb-2"
          onChange={(e) => onChange(e)}
          value={tool_brand}
        />
        <label
          htmlFor="tool_model"
          className="text-sm font-semibold text-gray-600 mb-1"
        >
          Tool Model
        </label>
        <input
          type="text"
          placeholder="Tool model"
          name="tool_model"
          className="border-2 border-gray-300 rounded-md p-2 mb-2"
          onChange={(e) => onChange(e)}
          value={tool_model}
        />
        <label
          htmlFor="tool_serial"
          className="text-sm font-semibold text-gray-600 mb-1"
        >
          Tool Serial
        </label>
        <input
          type="text"
          placeholder="Tool serial number"
          name="tool_serial"
          className="border-2 border-gray-300 rounded-md p-2 mb-2"
          onChange={(e) => onChange(e)}
          value={tool_serial}
        />
        <button
          disabled={tool_type === '' || tool_brand === '' || tool_model === '' || tool_serial === ''}
          className="bg-blue-500 hover:bg-blue-700 text-white rounded-md p-2 my-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add Tool
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddTools