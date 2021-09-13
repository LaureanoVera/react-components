import React from "react";
import TableRow from "./TableRow";

const Table = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Table</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Constellation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Emply</td>
            </tr>
          ) : (
            data.map((el) => (
              <TableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
