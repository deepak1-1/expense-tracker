import React from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({onSaveExpenseData}) => {

    // const [ userInput, setUserInput ] = React.useState({
    //                                         title: '',
    //                                         amount: '',
    //                                         date:  ''     
    //                                     })

    const [ title, setTitle ] = React.useState('')
    const [ amount, setAmount ] = React.useState('')
    const [ date, setDate ] = React.useState('')


    const titleChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     title: e.target.value
        // })
        // setUserInput( (prevState) => {
        //     return { ...prevState, title: e.target.value }
        // })//best way to do
        setTitle(e.target.value)
    }
    const amountChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     amount: e.target.value
        // })
        setAmount(e.target.value)
    }
    const dateChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     date: e.target.value
        // })
        setDate(e.target.value)
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        onSaveExpenseData(expenseData)
        setTitle('')
        setDate('')
        setAmount('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text"  value={title} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date"  value={date} min="2020-01-01"  onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm