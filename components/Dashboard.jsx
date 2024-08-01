import React from 'react'
import PieChartComponent from './PieChart'

function Dashboard() {
  return (
    <div className='components'>
      <div className='graph'>
        <img src="https://www.mydsomanager.com/img/help/news20230322-2.png" alt="" />
        {/* <img src="" alt="" /> */}
        <PieChartComponent />
      </div>
    </div>
  )
}

export default Dashboard