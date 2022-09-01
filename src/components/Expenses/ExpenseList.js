import React from "react";
import ExpenseItem from "./Expenseitem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  //   let expensescontent = <p>No expenses found.</p>;
  if (props.expense.length === 0) {
    return <h2 className="expense-list-fallback">Found no expense.</h2>;
  }
  return (
    <ul className="expense-List">
      {props.expense.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
