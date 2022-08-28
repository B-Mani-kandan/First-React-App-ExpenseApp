import React, { useState } from "react";

import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2022, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expensePrice = 280;
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // console.log("clicked!!");
    setTitle("Updated");
  };

  //thi is component
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Me!</button>
    </Card>
  );
};
export default ExpenseItem;
