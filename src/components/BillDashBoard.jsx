import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBill, setCategoryFilter } from '../redux/action';
import BillList from './BillList';
import Filter from './Filter';
import Chart from './Chart';
import AddBillForm from './AddBillForm';
import '../App.css';

const BillDashboard = () => {
  const bills = useSelector(state => state.bills.bills);
  const filteredCategory = useSelector(state => state.bills.filteredCategory);
  const dispatch = useDispatch();

  const [newBill, setNewBill] = useState({ description: '', category: '', amount: '', date: '' });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [budget, setBudget] = useState(1000);

  const handleAddBill = () => {
    if (newBill.description && newBill.category && newBill.amount && newBill.date) {
      dispatch(addBill(newBill));
      setNewBill({ description: '', category: '', amount: '', date: '' });
      setIsPopupOpen(false); 
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewBill(prevState => ({
      ...prevState,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);


  const filteredBills = filteredCategory ? bills.filter(bill => bill.category === filteredCategory) : bills;

  const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);

  const calculateBillsToPay = (bills, budget) => {
    const sortedBills = [...bills].sort((a, b) => a.amount - b.amount); 
    let total = 0;
    const selectedBills = [];
    for (let bill of sortedBills) {
      if (bill.amount <= budget && total + bill.amount <= budget) {
        total += bill.amount;
        selectedBills.push(bill);
      }
    }
    return selectedBills;
  };

  const billsToPay = calculateBillsToPay(filteredBills, budget);

  return (
    <div className="container">
      <h2>Monthly Budget: &#8377;{budget}</h2>
      <div className="filter-container">
        <Filter setCategoryFilter={category => dispatch(setCategoryFilter(category))} />
        <div>
          <label>Budget: </label>
          <input
            type="number"
            value={budget}
            onChange={e => setBudget(Number(e.target.value))} 
          />
        </div>
      </div>
      
      <div className="dashboard-header">
        <h2>Bill Dashboard</h2>
        <button className="add-bill-btn" onClick={handleOpenPopup}>
          <b>Add New Bill</b>
        </button>
      </div>

      <div>
        <h3>Total Amount: &#8377;{totalAmount} <br />All Bills </h3>
        <BillList bills={filteredBills} billsToPay={billsToPay} />
        <Chart bills={filteredBills} />
      </div>

      {isPopupOpen && (
        <div className={`popup ${isPopupOpen ? 'active' : ''}`}>
          <div className="popup-content">
            <button className="close-btn" onClick={handleClosePopup}>
              &times;
            </button>
            <AddBillForm
              newBill={newBill}
              handleInputChange={handleInputChange}
              handleAddBill={handleAddBill}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BillDashboard;
