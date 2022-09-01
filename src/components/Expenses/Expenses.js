import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses.js");
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenes = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expense">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expense={filteredExpenes} />
        <ExpenseList expense={filteredExpenes} />
      </Card>
    </div>
  );
};
export default Expenses;
