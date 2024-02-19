import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import LandingPageLayout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Location from './pages/Location'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Location',
        element: <Location />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
])

export const App = () => <RouterProvider router={router} />
