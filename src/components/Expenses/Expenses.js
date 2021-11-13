import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.ExpenseItems.filter((expenseItems) => {
    return expenseItems.date.getFullYear().toString() === filteredYear;
  });

  // To check if list has null products or not
  let expensesContent = <p>Oops, No expenses found!</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilteredYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* Adding list dynamically using map */}
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
