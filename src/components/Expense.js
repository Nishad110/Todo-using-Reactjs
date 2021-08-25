import React,{useState} from 'react';
import './Expense.css';

function Expense(props) {
  const expense=
    {
      id :3,
      name:'dilna'
    }
  
  const ex=props.onSubmitHandler(expense);  
  return (
    <div>
     {ex.map(item => {
          return <li>{item.name}</li>;
        })}
    </div>
  );
}

export default Expense;