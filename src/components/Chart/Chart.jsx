import React from 'react'
import ChartBar from './ChartBar'

import './Chart.css'


const Chart = ({chartData}) => {
    
    const dataPointValues = chartData.map( dataPoint => dataPoint.value)
    const maxValue = Math.max(...dataPointValues)

    return (
        <div className='chart'>
            { chartData.map( (eachData) => (
                <ChartBar 
                    key={eachData.label}
                    value={eachData.value}
                    label={eachData.label}
                    maxValue={maxValue}
                />
            ))}
        </div>
    )
}

export default Chart