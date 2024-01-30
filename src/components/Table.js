import React from 'react';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import './Table.css';

export const Table = () => {
  return (
    <div className='table-wrapper'>
      <table className='table'>
        <thead>
          <tr>
            <th>Page</th>
            <th className='expand'>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Home</td>
            <td>This the main page</td>
            <td>
              <span className='label label-live'>Live</span>
            </td>
            <td>
              <span className='actions'>
                <BsFillTrashFill className='delete-btn' />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
          <tr>
            <td>Page 2</td>
            <td>This the second page</td>
            <td>
              <span className='label label-draft'>Draft</span>
            </td>
            <td>
              <span className='actions'>
                <BsFillTrashFill className='delete-btn' />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
          <tr>
            <td>Page 3</td>
            <td>This the third page</td>
            <td>
              <span className='label label-error'>Draft</span>
            </td>
            <td>
              <span className='actions'>
                <BsFillTrashFill className='delete-btn' />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
