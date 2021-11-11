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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilteredYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={props.ExpenseItems[0].title}
          amount={props.ExpenseItems[0].amount}
          date={props.ExpenseItems[0].date}
        />
        <ExpenseItem
          title={props.ExpenseItems[1].title}
          amount={props.ExpenseItems[1].amount}
          date={props.ExpenseItems[1].date}
        />
        <ExpenseItem
          title={props.ExpenseItems[2].title}
          amount={props.ExpenseItems[2].amount}
          date={props.ExpenseItems[2].date}
        />
        <ExpenseItem
          title={props.ExpenseItems[3].title}
          amount={props.ExpenseItems[3].amount}
          date={props.ExpenseItems[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
