import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 11, 4);
  const expenseTitle = "Mobile Insurance";
  const expenseAmount = 100;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense_item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
