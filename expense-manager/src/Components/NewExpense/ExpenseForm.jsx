import React, { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm({onSaveExpenseData}) {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (e) => {
    console.log(e.target.value);
    // setUserInput({...userInput,enteredTitle:e.target.value})
    setEnterTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    console.log(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: e.target.value };
    // });
    setEnterAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    console.log(e.target.value);
    setEnterDate(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enterAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enterDate}
            type="date"
            min="2019-01-01"
            max="2022-12-13"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
