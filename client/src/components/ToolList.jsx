import React, { useState, useEffect } from 'react';
import { TiDelete } from 'react-icons/ti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToolList = () => {
  const [tools, setTools] = useState([]);
  const [ newTools, setNewTools ] = useState('');

  const getAllTools = async () => {
    try {
      const tools = await fetch('http://localhost:3010/tools/alltools/', {
        method: 'GET',
        headers: { token: localStorage.token },
      }) 
      const toolsJson = await tools.json();
      setTools(toolsJson);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteTool = async (id) => {
    try {
      const deleteTool = await fetch(`http://localhost:3010/tools/deletetool/${id}`, {
        method: 'DELETE',
        headers: { token: localStorage.token },
      });
      setTools(tools.filter(tool => tool.tool_id !== id));
      setNewTools(newTools - 1);
      deleteTool.json();
      toast.success('Tool Deleted Successfully 🧰');
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAllTools();
  }, [newTools]);

  return (
    <div className='flex flex-col bg-hero-pattern bg-no-repeat bg-center bg-cover bg-blend-luminosity bg-cyan-900' id='mainContainer'>
      <h3 className='text-center py-4 text-2xl font-extrabold'>Tool Chest</h3>
      {tools.length === 0 ? (
        <table className='w-11/12 self-center md:w-3/4 lg:w-1/2 bg-white'>
          <thead className='bg-blue-300 border-b-2 border-stone-700 text-left'>
            <tr>
              <th className='p-1'>Type</th>
              <th className='p-1'>Brand</th>
              <th className='p-1'>Model</th>
              <th className='p-1'>Serial</th>
              <th className='p-1 text-center'>-</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            <tr>
              <td className='p-1' colSpan={4}>No tools added to inventory!</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table className='w-11/12 self-center md:w-3/4 lg:w-1/2 bg-white'>
          <thead className='bg-blue-300 border-b-2 border-stone-700 text-left'>
            <tr>
              <th className='p-1'>Type</th>
              <th className='p-1'>Brand</th>
              <th className='p-1'>Model</th>
              <th className='p-1'>Serial</th>
              <th className='p-1 text-center'>-</th>
            </tr>
          </thead>
          <tbody className='text-left'>
            {tools.map((tool) => (
              <tr
                key={tool.tool_id}
                className='border-b-2 border-stone-700 hover:bg-slate-200'
              >
                <td className='p-1'>{tool.tool_type}</td>
                <td className='p-1'>{tool.tool_brand}</td>
                <td className='p-1'>{tool.tool_model}</td>
                <td className='p-1'>{tool.tool_serial}</td>
                <td className='p-1 text-center'>
                  <button
                    className='text-black cursor-pointer m-0.5 text-xl hover:text-red-600'
                    onClick={() => deleteTool(tool.tool_id)}
                  >
                    <TiDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <ToastContainer />
    </div>
  );
};

export default ToolList;