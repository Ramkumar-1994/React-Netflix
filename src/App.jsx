import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Details from './Pages/Details'
const App = () => {
  return (
    <>
    
    
    
    
    
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/details/:slug" element={<Details/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
