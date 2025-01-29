import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBill } from "../redux/action";
import '../App.css'

const EditBillForm = ({ existingBill }) => {
  const [formData, setFormData] = useState(existingBill);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(editBill({ ...formData, amount: Number(formData.amount) }));
    setIsEditing(false);
  };

  return isEditing ? (
    <form onSubmit={handleFormSubmit} className="form">
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setIsEditing(false)}>
        Cancel
      </button>
    </form>
  ) : (
    <button onClick={() => setIsEditing(true)}>Edit</button>
  );
};

export default EditBillForm;
