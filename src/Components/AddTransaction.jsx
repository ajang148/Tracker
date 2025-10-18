import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'

function AddTransaction() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

   const {addTransaction} = useContext(GlobalContext)

   const handleAdd = e => {
    e.preventDefault();
     const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount : +amount
     }
   addTransaction(newTransaction)
    }

  const handleText = (e) =>{
      setText(e.target.value)
  }

  const handleAmount = (e) =>{
      setAmount(e.target.value)
  }
  
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleAdd}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={handleText} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={handleAmount} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
