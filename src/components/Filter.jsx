import React from 'react';
import '../App.css'

const Filter = ({ setCategoryFilter }) => {
  return (
    <div className="filter-container">
      <label>Filter by category: </label>
      <select onChange={e => setCategoryFilter(e.target.value)} defaultValue="">
        <option value="">All</option>
        <option value="Food & Dining">Food & Dining</option>
        <option value="Utility">Utility</option>
        <option value="Shopping">Shopping</option>
        <option value="Education">Education</option>
        <option value="Personal Care">Personal Care</option>
        <option value="Travel">Travel</option>
        <option value="Others">Others</option>
      </select>
    </div>
  );
};

export default Filter;
