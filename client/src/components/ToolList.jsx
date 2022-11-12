import React, { useState, useEffect } from 'react';
import { TiDelete } from 'react-icons/ti';

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
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAllTools();
  }, [newTools]);

  return (
    <div className='flex flex-col' id="mainContainer">
      <h3 className="text-center my-4 text-lg font-semibold">Tool Chest</h3>
      {tools.length === 0 ? (
        <h3 className="text-center my-4 text-lg font-semibold">You have no tools in your inventory!</h3>
      ) : (
      <div className='grid grid-cols-2 gap-2 px-2 md:grid-cols-4 lg:grid-cols-6'>
          {tools.map(tool => (
          <div className='flex flex-col' key={tool.tool_id}>
            <div className='flex flex-row justify-end bg-cyan-600 w-full border-2 border-cyan-600 rounded-t-xl'>
              <TiDelete onClick={() => deleteTool(tool.tool_id)} className='text-white cursor-pointer m-0.5 text-xl hover:text-black' />
            </div>
            <div className='border-2 border-cyan-600 rounded-b-xl w-full px-4 py-2 bg-white'>
              <span className="flex flex-col flex-wrap">
                <p className="text-lg">Tool Type:</p>
                <p className='text-gray-700 font-semibold'>{tool.tool_type}</p>
              </span>
              <span className="flex flex-col flex-wrap">
                <p className="text-lg">Tool Brand:</p>
                <p className='text-gray-700 font-semibold'>{tool.tool_brand}</p>
              </span>
              <span className="flex flex-col flex-wrap">
                <p className="text-lg">Tool Model:</p>
                <p className='text-gray-700 font-semibold'>{tool.tool_model}</p>
              </span>
              <span className="flex flex-col flex-wrap">
                <p className="text-lg">Tool Serial:</p>
                <p className='text-gray-700 font-semibold'>{tool.tool_serial}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};


export default ToolList