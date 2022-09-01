import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="filter">
      <div className="filter-year">
        <label>Filter by Year</label>
        <select value={props.selected} onChange={dropdownHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
