import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>4 November 2021</div>
      <div className="expense_item__description">
        <h2>Mobile Insurance</h2>
        <div className="expense-item__price">$100</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
