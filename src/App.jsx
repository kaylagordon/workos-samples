import { useState } from 'react'
import './App.css'
import SSO from './pages/SSO'
import Nav from './pages/Nav'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <p>HOME</p>
      <Outlet />
    </main>
  )
}

export default App
