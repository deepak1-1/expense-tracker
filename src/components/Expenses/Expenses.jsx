import React from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

const Expenses = ({expenses}) => {

    return (
        <Card className='expenses'>
            { expenses.map( expense => <ExpenseItem data = {expense}/>) }
        </Card>
    )
}

export default Expenses