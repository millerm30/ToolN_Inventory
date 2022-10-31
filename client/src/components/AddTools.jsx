import React, { useState } from 'react'

const AddTools = () => {
  const [inputs, setInputs] = useState({
    tool_name: '',
    tool_brand: '',
    tool_model: '',
    tool_serial: ''
  });

  const { tool_name, tool_brand, tool_model, tool_serial } = inputs;

  const onChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className='flex flex-col'>
      <h3 className="text-center my-4 text-lg font-semibold">Add Inventory</h3>
      <form className="flex flex-col w-3/4 self-center bg-white p-6 rounded-xl border-2 shadow-md md:w-1/2 lg:w-1/3">
        <label
          htmlFor="tool_name"
          className="text-sm font-semibold text-gray-600 mb-1"
        >
          Tool Name
        </label>
        <input
          type="text"
          placeholder="Tool Type"
          name="tool_name"
          className="border-2 border-gray-300 rounded-md p-2 mb-2"
          onChange={(e) => onChange(e)}
          value={tool_name}
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
          disabled={tool_name === '' || tool_brand === '' || tool_model === '' || tool_serial === ''}
          className="bg-blue-500 hover:bg-blue-700 text-white rounded-md p-2 my-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add Tool
        </button>
      </form>
    </div>
  );
}

export default AddTools