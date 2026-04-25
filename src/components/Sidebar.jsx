import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='w-64 flex min-h-screen border-r pt-5'>
      <ul className='flex flex-col'>
        <NavLink className='hover:text-primary hover:scale-110 p-4' to='/'>Tela Inicial</NavLink>
        <NavLink className='hover:text-primary hover:scale-110 p-4' to='/fluidoterapia'>Cálculo de Fluidoterapia</NavLink>
      </ul>
    </aside>
  )
}

export default Sidebar
