import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Fluidoterapia from './pages/Fluidoterapia'
import Layout from "./components/Layout";
import RegraDeTres from './pages/RegraDeTres'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path='fluidoterapia' element={<Fluidoterapia />}/>
        <Route path='regra-de-3' element={<RegraDeTres />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
