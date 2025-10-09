import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar({ categories }) {
    return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
      <Container>
        <Navbar.Brand href="../" className="fw-bold">Tienda Albinegra</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              {categories.map(category => (
              <NavDropdown.Item 
                as={NavLink} 
                to={`/category/${category.categoryName}` } 
                style= {({ isActive }) => ({
                  color: isActive ? 'text-warning fw-semibold' : 'text-dark'})} 
                key={category.id}
              >
                {category.categoryName}
              </NavDropdown.Item>  
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
        
    </Navbar>
  );
}

export default NavBar;