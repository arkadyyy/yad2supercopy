import { BrowserRouter, Route, Routes } from 'react-router'
import { VehicelsPage, HomePage, Root,VehiclePage, RealestatePage } from './pages/pages'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element = {<Root/>}>
            <Route index element = {<HomePage/>}/>
            <Route path='/vehicles/cars' element = {<VehicelsPage/>} />
            <Route path='/vehicle/:vehicleId' element = {<VehiclePage/>} />
            <Route path='/realestate' element = {<RealestatePage/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  
  )
}

export default App