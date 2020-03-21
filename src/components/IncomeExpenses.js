import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const { transactions } =  useContext(GlobalContext)

  const amounts = transactions.map( t => t.amount )
  const income = amounts
    .filter( amount => amount > 0 )
    .reduce( (acc,amount) => acc += amount )
    .toFixed(2)
  const expenses = amounts
    .filter( a => a < 0 )
    .reduce( (acc,amount) => acc += amount )
    .toFixed(2)
    * -1


    console.log(amounts)
    console.log(expenses)
  

  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expenses}</p>
        </div>
      </div>
    </div>
  )
}
