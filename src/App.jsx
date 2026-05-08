import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import GenrePage from './Pages/GenrePage'





const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/genre/:id' element={<GenrePage/>} />
      </Route>
    </Routes>
  )
}

export default App