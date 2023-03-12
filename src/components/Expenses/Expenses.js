import { useState } from "react";
//import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  //currently setting selected year to 2020
  //selected year must be stored in main function using use state child->parent passing
 const [filteredYear,setFilteredYear]=useState('2020');

 //once filtered is selected this function is called and passed the value through function
  const filterChangeHandler=(selectedYear)=>
  {
      setFilteredYear(selectedYear);
  };


  //from props.items filtering only the selected year and passing to expense items
  //once added in form it will be added to app
  //then returned to expense.js->expense item->intermediate expense filter
  //when filtered filtered year is returned to expense
  //expense filter the props.items using the expense filter and those things will be returned
  const filteredExpenses=props.items.filter((exp)=>
  {
      return exp.date.getFullYear().toString() ===filteredYear;
  });

  //we can store jsx content in variables
  

  return (
    //map is used to iterate over all array
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

    <ExpensesChart expenses={filteredExpenses}/>



    <ExpensesList items={filteredExpenses}/>
    
      
    </Card>
    </div>
  );
}

export default Expenses;
