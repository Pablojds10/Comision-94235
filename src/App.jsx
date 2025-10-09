import './App.css'
import ItemListContainer from './componentes/ItemListContainer'
import DetailContainer from './componentes/ItemDetailContainer'
import NavbarContainer from './componentes/NavbarContainer'
import CartContainer from './componentes/CartContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './componentes/Checkout'
import { Toaster } from 'react-hot-toast'
import Loader from './componentes/Loader'
import { useState, useEffect } from 'react'

function App() { 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }
  
  return (
  <BrowserRouter>
    <NavbarContainer />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/Detail/:id" element={<DetailContainer />} />
      <Route path="/cart" element={<CartContainer />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    <Toaster />
  </BrowserRouter>
  )
}

export default App
