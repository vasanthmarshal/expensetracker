import React from 'react';
import "./ExpensesList.css";
import ExpenseItem from './ExpenseItem';



const ExpensesList=(props)=>{

    if(props.items.length===0){
        return<h2 className="expense-list__fallback">Found no expenses</h2>;
    }

    return(

    <ul className='expenses-list'>
{props.items.map((x)=>(
        <ExpenseItem
          key={x.id}
          title={x.title}
          amount={x.amount}
          date={x.date}
        />))
        }
    </ul>
    );
};

export default ExpensesList;