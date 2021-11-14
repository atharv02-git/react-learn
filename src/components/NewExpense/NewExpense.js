import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [ShowForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const stopShowFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!ShowForm && <button onClick={showFormHandler}>Add New Expense </button>}
      {ShowForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopShowFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
