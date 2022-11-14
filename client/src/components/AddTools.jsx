import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTools = () => {
  const [inputs, setInputs] = useState({
    tool_type: '',
    tool_brand: '',
    tool_model: '',
    tool_serial: ''
  });

  const [ status, setStatus ] = useState('Submit');
  
  const [ addNewTool, setAddNewTool ] = useState('');

  const { tool_type, tool_brand, tool_model, tool_serial } = inputs;

  const onChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e, id) => {
    e.preventDefault();
    setStatus('Sending...');
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
      toast.success(tool_type + ' Added Successfully 🧰');
      setStatus('Submit');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className='bg-hero-pattern bg-no-repeat bg-center bg-cover bg-blend-luminosity bg-cyan-900' id='mainContainer'>
      <h3 className='text-center py-4 text-2xl font-extrabold'>Add Inventory</h3>
      <form className='flex flex-col w-3/4 ml-auto mr-auto bg-[#f8f8f8] p-6 rounded-xl border-2 border-black md:w-1/2 lg:w-1/3' onSubmit={onSubmitForm}>
        <label
          htmlFor='tool_name'
          className='text-sm font-semibold text-gray-600 mb-1'
        >
          Tool Type
        </label>
        <input
          type='text'
          placeholder='Enter type of tool...'
          name='tool_type'
          className='border-2 border-gray-300 rounded-md p-2 mb-2'
          onChange={(e) => onChange(e)}
          value={tool_type}
          required
        />
        <label
          htmlFor='tool_brand'
          className='text-sm font-semibold text-gray-600 mb-1'
        >
          Tool Brand Name
        </label>
        <input
          type='text'
          placeholder='Enter brand name of tool...'
          name='tool_brand'
          className='border-2 border-gray-300 rounded-md p-2 mb-2'
          onChange={(e) => onChange(e)}
          value={tool_brand}
          required
        />
        <label
          htmlFor='tool_model'
          className='text-sm font-semibold text-gray-600 mb-1'
        >
          Tool Model Number
        </label>
        <input
          type='text'
          placeholder='Enter model number of tool...'
          name='tool_model'
          className='border-2 border-gray-300 rounded-md p-2 mb-2'
          onChange={(e) => onChange(e)}
          value={tool_model}
          required
        />
        <label
          htmlFor='tool_serial'
          className='text-sm font-semibold text-gray-600 mb-1'
        >
          Tool Serial Number
        </label>
        <input
          type='text'
          placeholder='Enter serial number of tool...'
          name='tool_serial'
          className='border-2 border-gray-300 rounded-md p-2 mb-2'
          onChange={(e) => onChange(e)}
          value={tool_serial}
          required
        />
        <button
          disabled={tool_type === '' || tool_brand === '' || tool_model === '' || tool_serial === ''}
          className='bg-blue-500 hover:bg-blue-700 text-white rounded-md p-2 my-2 disabled:opacity-50 disabled:cursor-not-allowed'
          type='submit'
        >
          {status}
        </button>
      </form>
    </div>
  );
};

export default AddTools;