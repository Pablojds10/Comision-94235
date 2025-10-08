import './App.css'
import ItemListContainer from './componentes/ItemListContainer'
import DetailContainer from './componentes/ItemDetailContainer'
import NavbarContainer from './componentes/NavbarContainer'
import CartContainer from './componentes/CartContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './componentes/Checkout'

function App() { 
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
  </BrowserRouter>
  )
}

export default App
