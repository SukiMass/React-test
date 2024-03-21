import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Api from '../Api/Api'

const Routing = () => {
  return (
    <>
      <BrowserRouter>        
        <Routes>
          <Route path='/Api' element={<Api />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing;