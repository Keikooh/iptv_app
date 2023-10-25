import React from 'react'
import Home from './Home'
import Footer from './Footer'
import Favorites from './favorites'
import Navbar from './navbar'
import SeeMore from './SeeMore'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'

const Router = () => {

  const Layout = () => {
    return (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const BrowserRoutes = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/favorites',
          element: <Favorites/>
        },
        {
          path: '/seeMore',
          element: <SeeMore/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={BrowserRoutes}/>
  )
}

export default Router
