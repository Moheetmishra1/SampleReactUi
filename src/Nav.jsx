import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
      <NavLink to={"/"}><i className="fa-solid fa-chart-line"></i> Dashboard</NavLink>
      <NavLink to={"Inventory"}><i className="fa-solid fa-warehouse"></i> Inventory</NavLink>
      <NavLink to={"Order"}><i className="fa-solid fa-cart-shopping"></i> Order</NavLink>
      <NavLink to={"Return"}> <i className="fa-solid fa-rotate-left"></i> Return</NavLink>
      <NavLink to={"Customers"}><i className="fa-solid fa-person"></i> Customers</NavLink>
      <NavLink to={"Shipping"}><i className="fa-solid fa-truck"></i> Shipping</NavLink>
      <NavLink to={"Channel"}> <i className="fa-solid fa-house-flag"></i> Channel</NavLink>
      <NavLink to={"Integrations"}><i className="fa-solid fa-suitcase-rolling"></i> Integrations</NavLink>
      <NavLink to={"Calculators"}><i className="fa-solid fa-calculator"></i> Calculators</NavLink>
      <NavLink to={"Reports"}> <i className="fa-solid fa-file-invoice"></i> Reports</NavLink>
      <NavLink to={"Account"}><i className="fa-solid fa-user"></i> Account</NavLink>
    </div>
  )
}

export default Nav