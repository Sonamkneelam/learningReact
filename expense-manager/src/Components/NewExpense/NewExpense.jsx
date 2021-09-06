import "./NewExpense.css"
import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense=({onAddExpense})=>{
    const onSaveExpenseDataHandeler=(enteredExpenseData)=>{
        const expenseData={
            
            ...enteredExpenseData,
            id:Math.random().toString()
        };
     //   console.log('expenseData:', expenseData)
        onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandeler}></ExpenseForm>
        </div>
    )
}

export default  NewExpense;