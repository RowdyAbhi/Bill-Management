
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBill } from "../redux/action";
import EditBillForm from "./EditBillForm";
import "../App.css";

const BillList = ({ billsToPay = [] }) => {  
  const dispatch = useDispatch();


  const bills = useSelector((state) => state.bills?.bills) || [];
  const filteredCategory = useSelector((state) => state.bills?.filteredCategory) || "";


  const filteredBills = filteredCategory
    ? bills.filter((bill) => bill.category === filteredCategory)
    : bills;

  return (
    <div className="bill-list">
      <ul>
        {filteredBills.length > 0 ? (
          filteredBills.map((bill) => (
            <li key={bill.id} className="bill-item">
              <div>
                <strong>{bill.description}</strong> - &#8377;{bill.amount}
                <br />
                <span>{bill.category}</span> | <span>{bill.date}</span>
              </div>
              <div>
                <button className="delete-btn" onClick={() => dispatch(removeBill(bill.id))}>
                  Delete
                </button>
                <EditBillForm existingBill={bill} />
              </div>
            </li>
          ))
        ) : (
          <p className="empty-message">No bills found.</p>
        )}
      </ul>
      

      <div className="bills-to-pay-container">
        <h3>Bills to Pay (Within Budget)</h3>
        <ul>
          {billsToPay.length > 0 ? (
            billsToPay.map((bill) => (
              <li key={bill.id} className="bill-item">
                <div>
                  <strong>{bill.description}</strong> - &#8377;{bill.amount}
                  <br />
                  <span>{bill.category}</span> | <span>{bill.date}</span>
                </div>
              </li>
            ))
          ) : (
            <p className="empty-message">No bills within budget.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BillList;


