import React from "react";

const TableRow = ({ el, setDataToEdit, deleteData }) => {
  const {name, constellation, id} = el
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;