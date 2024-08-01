import React from 'react'
import PieChartComponent from './PieChart'
import LineGraph from '../src/LineGraph'

function Dashboard() {
  return (
    <div className='components'>
      <div className='graph'>
        {/* <img src="https://www.mydsomanager.com/img/help/news20230322-2.png" alt="" /> */}
        {/* <img src="" alt="" /> */}
        <LineGraph />
      </div>
        <PieChartComponent />
    </div>
  )
}

export default Dashboard