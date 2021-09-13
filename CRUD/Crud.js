import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const initialDB = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragón",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andrómeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fénix",
  },
];

const Crud = ({ title }) => {
  const [db, setDb] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Are you sure to delete the record? ${id}`);
    if (isDelete) {
      let newData = db.filter(el => el.id !== id) 
      setDb(newData)
    } else {
      return
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <Form
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <Table data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
    </div>
  );
};

export default Crud;