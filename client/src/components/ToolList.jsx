import React, { useState, useEffect, useId } from 'react';
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

  const deleteTool = async (tool_id) => {
    try {
      const deleteTool = await fetch(`http://localhost:3010/tools/deletetool/${tool_id}`, {
        method: 'DELETE',
        headers: { token: localStorage.token },
      });
      setTools(tools.filter(tool => tool.tool_id !== tool_id));
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
    <div className='flex flex-col'>
      <h3 className="text-center my-4 text-lg font-semibold">Tool Chest</h3>
      <table
        className="table-auto border-collapse border-2 border-gray-300 w-3/4 self-center"
      >
        <thead>
          <tr>
            <th className="border-2 border-gray-300 p-2">Type</th>
            <th className="border-2 border-gray-300 p-2">Brand</th>
            <th className="border-2 border-gray-300 p-2">Model</th>
            <th className="border-2 border-gray-300 p-2">Serial #</th>
            <th className="border-2 border-gray-300 p-2">Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {tools.map((tool) => (
            <tr key={tool.tool_id}>
              <td className="border-2 border-gray-300 p-2">{tool.tool_type}</td>
              <td className="border-2 border-gray-300 p-2">{tool.tool_brand}</td>
              <td className="border-2 border-gray-300 p-2">{tool.tool_model}</td>
              <td className="border-2 border-gray-300 p-2">{tool.tool_serial}</td>
              <td className="border-2 border-gray-300 p-2">
                <TiDelete onClick={deleteTool}/>
              </td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
  );
}

export default ToolList