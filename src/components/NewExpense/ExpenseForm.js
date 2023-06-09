import React,{useState} from "react";
import "./ExpenseForm.css";


const ExpenseForm=(props)=>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    /*const [userInput,setUserInput]=useState(
        {
            enteredTitle:'',
            enteredAmount:'',
            enteredDate:''
        });*/

    const titleChangeHandler=(event)=>{
        //we are using prev since it depends on previous sate
        setEnteredTitle(event.target.value);
        /*setUserInput((prevState)=>{
            return {...prevState,enteredTitle:event.target.value};
        });*/
    };

    const amountChangeHandler=(event)=>{
        //if out user input depends on previous use this method
        //rerender all the states
        setEnteredAmount(event.target.value);
        /*setUserInput((prevState)=>{
            return {...prevState, enteredAmount:event.target.value};
        });*/
    };

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
        /*setUserInput((prevState)=>{
            return {...prevState, enteredDate:event.target.value};
        });*/
    };

    const submitHandler = (event)=>{
        event.preventDefault();
        //getting the value and passing the form and making the form empty

        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };



    return(
    <div><form onSubmit={submitHandler}>
        <div className="new-expense__control">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
        </div>
        <div className="new-expense__actions">
            <button onClick={props.onCancel}>Cancel</button>
            <button type="submit" >Add Expense</button>
        </div>
    </form></div>);
};

export default ExpenseForm;