import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Inventory from '../components/Inventory'
import Order from '../components/Order'
import Return from '../components/Return'
import Customers from '../components/Customers'
import Shipping from '../components/Shipping'
import Channel from '../components/Channel'
import Integrations from '../components/Integrations'
import Calculators from '../components/Calculators'
import Reports from '../components/Reports'
import Nav from './Nav'
import Home from '../components/Home'
import "./App.css"
import Account from '../components/Account'

function App() {
  return (
    <div className='app'>
 
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='Inventory' element={<Inventory/>}/>
    <Route path='Order' element={<Order/>}/>
    <Route path='Return' element={<Return/>}/>
    <Route path='Customers' element={<Customers/>}/>
    <Route path='Shipping' element={<Shipping/>}/>
    <Route path='Channel' element={<Channel/>}/>
    <Route path='Integrations' element={<Integrations/>}/>
    <Route path='Calculators' element={<Calculators/>}/>
    <Route path='Reports' element={<Reports/>}/>
    <Route path='Account' element={<Account/>}/>
   

    </Route>
    
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App