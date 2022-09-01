import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpense = [
  {
    id: "e1",
    title: "Phone Back Case",
    amount: 200,
    date: new Date(2021, 0, 15),
  },
  {
    id: "e2",
    title: "Car insurance",
    amount: 600,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e3",
    title: "Dress Purchasing",
    amount: 300,
    date: new Date(2022, 7, 2),
  },
  {
    id: "e4",
    title: "Toilet Paper",
    amount: 100,
    date: new Date(2022, 6, 21),
  },
];

const App = () => {
  const [expense, SetExpenses] = useState(DummyExpense);

  const addExpensHandler = (expense) => {
    // console.log("in app.js");
    // console.log(expense);
    SetExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expense })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpensHandler} />
      <Expenses expense={expense} />
    </div>
  );
};

export default App;
