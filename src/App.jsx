import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

function App() {

  return (
    <main>
      <header>
      <h1>Kayla's WorkOS Samples</h1>
      <nav>
        <Link to='/workos-sample-app/sso' className='nav-btn'>SSO (Node.js)</Link>
      </nav>
      </header>
      <Outlet />
    </main>
  )
}

export default App
