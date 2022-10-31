import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ToolList = () => {
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
          <tr>
            <td className="border-2 border-gray-300 p-2">Hammer</td>
            <td className="border-2 border-gray-300 p-2">Stanley</td>
            <td className="border-2 border-gray-300 p-2">1234</td>
            <td className="border-2 border-gray-300 p-2">123456789</td>
            <td className="border-2 border-gray-300 p-2">
              <button className='flex ml-auto mr-auto'>
                <TiDelete className='text-red-600 text-2xl hover:text-red-800'/>
              </button>
            </td>
          </tr>
          </tbody>
      </table>
    </div>
  );
}

export default ToolList