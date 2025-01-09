import { useState } from 'react'
import './App.css'
import SSO from './SSO'
import Nav from './Nav'
import {Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Routes>
        <Route path='/' element={<Nav />}/>
        <Route path='/sso' element={<SSO />} /> 
      </Routes>
    </main>
  )
}

export default App
