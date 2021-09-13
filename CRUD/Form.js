import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  constellation: "",
  id: null,
};

const Form = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit)
    } else {
      setForm(initialForm)
    }
  }, [dataToEdit])

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!form.name || !form.constellation) {
      alert("Incomplete Data");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (evt) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? 'Edit' : 'Add'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={form.name}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          value={form.constellation}
          type="text"
          name="constellation"
          placeholder="Constellation"
        />
        <br />
        <input type="submit" value="Send" />
        <input type="reset" value="Clean" onClick={handleReset} />
      </form>
    </div>
  );
};

export default Form;
