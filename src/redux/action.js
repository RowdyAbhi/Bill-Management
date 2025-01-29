
export const addBill = (bill) => ({
  type: "ADD_BILL",
  payload: bill,
});

export const editBill = (updatedBill) => ({
  type: "EDIT_BILL",
  payload: updatedBill,
});

export const removeBill = (id) => ({
  type: "REMOVE_BILL",
  payload: id,
});

export const setCategoryFilter = (category) => ({
  type: "SET_CATEGORY_FILTER",
  payload: category,
});
