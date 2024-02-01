import React, { useState, useRef, useEffect } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import './Table.css';

export const Table = ({ rows, deleteRow, editRow }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const checkboxref = useRef(null);

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      const ids = rows.map((row, idx) => {
        return idx;
      });

      setSelectedRows(ids);
    } else {
      setSelectedRows([]);
    }
  };

  const toggleRowSelection = (idx) => {
    let newSelectedRows;

    if (selectedRows.includes(idx)) {
      newSelectedRows = selectedRows.filter(
        (selectedIdx) => selectedIdx !== idx
      );
    } else {
      newSelectedRows = [...selectedRows, idx];
    }

    setSelectedRows(newSelectedRows);
  };

  useEffect(() => {
    if (selectedRows.length === 0) {
      checkboxref.current.checked = false;
    }

    if (selectedRows.length === rows.length) {
      checkboxref.current.checked = true;
    }
  }, [selectedRows]);

  return (
    <div className='table-wrapper'>
      <table className='table'>
        <thead>
          <tr>
            <th>
              <input
                type='checkbox'
                ref={checkboxref}
                onChange={toggleSelectAll}
              />
            </th>
            <th>ID</th>
            <th>Page</th>
            <th className='expand'>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const statusText =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);

            return (
              <tr key={idx}>
                <td>
                  <input
                    type='checkbox'
                    id={`checkbox-${idx}`}
                    checked={selectedRows.includes(idx)}
                    onChange={() => toggleRowSelection(idx)}
                  />
                </td>
                <td>{idx + 1}</td>
                <td>{row.page}</td>
                <td className='expand'>{row.description}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
                <td className='fit'>
                  <span className='actions'>
                    <BsFillTrashFill
                      className='delete-btn'
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className='edit-btn'
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
