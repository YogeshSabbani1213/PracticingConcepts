// import React from 'react'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import Hero from './components/Hero'
import Whatsapp from './components/Whatsapp'
import Products from './components/Products'
import Cart from './pages/cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UseMemo from './components/UseMemo'


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Hero />
        <UseMemo/>
        <Products />
        <SearchBar />
        <Whatsapp />
      </>
    ),
  },
  {
    path: '/cart',
    element: <Cart />
  }
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
