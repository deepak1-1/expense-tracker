import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({onAddExpense}) => {

    const [ showForm, setShowForm ] = React.useState(false)

    const saveExpenseDataHandler = (ExpenseData) => {
        const expenseData = {
            ...ExpenseData,
            id: Math.random().toString()
        }
        onAddExpense(expenseData)
    }

    const cancelHandler = () => setShowForm(false)
    
    return (
        <div className='new-expense'>
            { showForm ? 
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                    onCancelAddExpense={cancelHandler}
                /> :
                <button onClick={ () => setShowForm(true)}>Add New Expense</button>
            }
        </div>
    )
}

export default NewExpense