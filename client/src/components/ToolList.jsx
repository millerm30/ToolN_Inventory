import React, { useState, useEffect, useId } from 'react';
import { TiDelete } from 'react-icons/ti';

const ToolList = () => {
  const [tools, setTools] = useState([]);
  const id = useId();

  const loadTools = async () => {
    try {
      const response = await fetch('http://localhost:3010/tools/alltools');
      const jsonData = await response.json();
      setTools(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect (() => {
    loadTools();
  }, []);

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
        <tbody>
          {tools.map(tool => (
            <tr key={id} className="text-center">
              <td className="border-2 border-gray-300 p-2">{tool.tool_type}</td>
              <td className="border-2 border-gray-300 p-2">{tool.tool_brand}</td>
              <td className="border-2 border-gray-300 p-2">{tool.tool_model}</td>
              <td className="border-2 border-gray-300 p-2">{tool.tool_serial}</td>
              <td className="border-2 border-gray-300 p-2">
                <TiDelete />
              </td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
  );
}

export default ToolList