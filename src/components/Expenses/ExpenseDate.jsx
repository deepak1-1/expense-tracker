import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = ({ dateDataObject }) => {

    const month = dateDataObject.toLocaleString('en-US', { month: 'long' })
    const year = dateDataObject.toLocaleString('en-US', { day: '2-digit' })
    const day = dateDataObject.getFullYear()

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{ month }</div>
            <div className='expense-date__year'>{ year }</div>
            <div className='expense-date__day'>{ day }</div>
        </div>
    )
}

export default ExpenseDate