import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { CarPage, HomePage, Root } from './pages/pages'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element = {<Root/>}>
            <Route index element = {<HomePage/>}/>
            <Route path='vehicles/cars' element = {<CarPage/>} />
          </Route>
          
        </Routes>
    </BrowserRouter>
  
  )
}

export default App