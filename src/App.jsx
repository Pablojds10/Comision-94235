import './App.css'
import ItemListContainer from './componentes/ItemListContainer'
import DetailContainer from './componentes/DetailContainer'
import NavbarContainer from './componentes/NavbarContainer'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() { 
  return (
  <BrowserRouter>
    <NavbarContainer />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/Detail/:id" element={<DetailContainer />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
