import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Accommodation from './pages/Accommodation'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/accommodation/:id',
        element: <Accommodation />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
])

export const Router = () => <RouterProvider router={router} />
