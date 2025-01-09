import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './pages/Nav.jsx'
import SSO from './pages/SSO.jsx'

const router = createBrowserRouter([
  {
    path: '/workos-sample-app/',
    element: <App/>,
    children: [
      {
        path: '/workos-sample-app/',
        element: <Nav/>
      },
      {
        path: '/workos-sample-app/sso',
        element: <SSO/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
)
