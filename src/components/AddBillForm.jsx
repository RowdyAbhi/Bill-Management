import React from 'react';
import '../App.css'

const AddBillForm = ({ newBill, handleInputChange, handleAddBill }) => {
  return (
    <form onSubmit={e => { e.preventDefault(); handleAddBill(); }}>
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={newBill.description}
        onChange={handleInputChange}
        placeholder="Enter description"
      />
      <label>Category</label>
      <select
        name="category"
        value={newBill.category}
        onChange={handleInputChange}
      >
        <option value="">Select Category</option>
        <option value="Food & Dining">Food & Dining</option>
        <option value="Utility">Utility</option>
        <option value="Shopping">Shopping</option>
        <option value="Education">Education</option>
        <option value="Personal Care">Personal Care</option>
        <option value="Travel">Travel</option>
        <option value="Others">Others</option>
      </select>
      <label>Amount</label>
      <input
        type="number"
        name="amount"
        value={newBill.amount}
        onChange={handleInputChange}
        placeholder="Enter amount"
      />
      <label>Date</label>
      <input
        type="date"
        name="date"
        value={newBill.date}
        onChange={handleInputChange}
      />
      <button type="submit">Add Bill</button>
    </form>
  );
};

export default AddBillForm;
