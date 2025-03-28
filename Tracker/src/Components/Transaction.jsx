import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

function Transaction({transaction}) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalContext)

    const handleDelete = () => {
      deleteTransaction(transaction.id)
    }

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button 
          className="delete-btn" onClick={handleDelete}>x</button>
        </li> 
  )
}

export default Transaction
