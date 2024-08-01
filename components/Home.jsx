import React from 'react'
import Nav from '../src/Nav'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Home