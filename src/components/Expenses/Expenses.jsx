import React from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = ({expenses}) => {

    const [ filterYear, setFilterYear ] = React.useState('2020')

    const onfilterChange = (year) => {
        setFilterYear(year)
    }

    const filteredExpenses = expenses.filter( expense => expense.date.getFullYear().toString() === filterYear)

    return (
        <Card className='expenses'>
            <ExpenseFilter selectedFilterYear={filterYear} onfilterChange={onfilterChange}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList data={filteredExpenses}/>
        </Card>
    )
}

export default Expenses