import NavBar from './NavBar';
import { getCategories } from '../firebase/db';
import { useEffect, useState } from 'react';

function NavbarContainer() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then(data => setCategories(data))
  }, [])

  return <NavBar categories={categories} />
}

export default NavbarContainer;