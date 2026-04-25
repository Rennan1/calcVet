import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Fluidoterapia from './pages/Fluidoterapia'
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path='fluidoterapia' element={<Fluidoterapia />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
