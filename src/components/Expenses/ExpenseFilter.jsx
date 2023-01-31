import React from 'react'
import './ExpenseFilter.css'

const ListOptions = () => {

    const currDateYear = new Date().getFullYear()
    const [arr, setArr] = React.useState([])

    React.useEffect( () => {
        let tempArr = []
        for(var i=2019; i<= currDateYear; i++){
            tempArr.push(i)
        }
        setArr(tempArr)
    }, [])
    return (
        <>
            { arr.map( (val, index) => <option value={`${val}`} key={index}>{val}</option>) }
        </>
    )
}

const ExpenseFilter = ({onfilterChange, selectedFilterYear}) => {

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={(e) => onfilterChange(e.target.value)} value={selectedFilterYear}>
                    <ListOptions />
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter