import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

  const [text, setText] = useState('default text');
  const [amount, setAmount] = useState('1.24');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    let newTransaction = {
      id: Math.floor(Math.random()*1000000),
      text,
      amount: parseFloat( amount ),
    }

    console.log(newTransaction)
    addTransaction(newTransaction)
  }

  const handleAmountChange = e => {
    let output = e.target.value
      .toString()
      .split(".")
      .map( (el,i) =>
        (i == 1 && el.length > 2 ) ?
          el.split("").slice(0,2).join("") : el )
      .join(".")

      console.log(output)
      
    setAmount(parseFloat(output)) 
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input 
            type="text" 
            id="text" 
            placeholder="Enter text..."
            value={ text }
            onChange={ e => setText(e.target.value) } 
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount 
          <br />
          (negative - expense, positive - income)</label>
          <input 
            type="number" 
            id="amount"
            placeholder="Enter amount..."
            value={ amount }
            onChange={ handleAmountChange }
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
