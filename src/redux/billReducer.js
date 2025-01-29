
  
import { nanoid } from 'nanoid';

const initialState = {
  bills: [
    {
      id: nanoid(),
      description: "Dominoes",
      category: "Food & Dining",
      amount: 430,
      date: "2025-01-02",
    },
    {
      id: nanoid(),
      description: "Car wash",
      category: "Utility",
      amount: 500,
      date: "2025-01-06",
    },
    {
      id: nanoid(),
      description: "Amazon",
      category: "Shopping",
      amount: 2030,
      date: "2025-01-07",
    },
    {
      id: nanoid(),
      description: "House Rent",
      category: "Food & Dining",
      amount: 35900,
      date: "2025-01-03",
    },
    {
      id: nanoid(),
      description: "Tuition",
      category: "Education",
      amount: 2200,
      date: "2025-01-12",
    },
    {
      id: nanoid(),
      description: "Laundary",
      category: "Personal Care",
      amount: 320,
      date: "2025-01-14",
    },
    {
      id: nanoid(),
      description: "Vacation",
      category: "Travel",
      amount: 3430,
      date: "2025-01-18",
    },

  ],
  filteredCategory: null,
};

const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BILL":
      return { ...state, bills: [...state.bills, { ...action.payload, id: nanoid() }] };
    case "EDIT_BILL":
      return {
        ...state,
        bills: state.bills.map((bill) =>
          bill.id === action.payload.id ? action.payload : bill
        ),
      };
    case "REMOVE_BILL":
      return {
        ...state,
        bills: state.bills.filter((bill) => bill.id !== action.payload),
      };
    case "SET_CATEGORY_FILTER":
      return { ...state, filteredCategory: action.payload };
    default:
      return state;
  }
};

export default billReducer;
