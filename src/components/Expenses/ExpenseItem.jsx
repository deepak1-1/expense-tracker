import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = ({data}) => {

    const [ title, setTitle ] = React.useState(data.title)
    const handleClick = () => {
        setTitle("bro!")
    }
    return (
        <Card className='expense-item' key={data.id}>
            <ExpenseDate dateDataObject={data.date}/>
            <div className='expense-item__description'>
                <h2>{ title }</h2>
                <div className='expense-item__price'>${data.amount}</div>
            </div>
            <button onClick={ handleClick }>Change title</button>
        </Card>
    )
}

export default ExpenseItem