import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = ({ data }) => {
    
    if(data.length === 0){
        return <h2 className='expenses-list__fallback'>No Expenses found.</h2>
    }

    return (
        <ul className='expenses-list'>
            { data.map( expense => 
                <ExpenseItem key={expense.id} data = {expense}/>
            )}
        </ul>
    )
}

export default ExpensesList