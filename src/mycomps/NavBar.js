import {Container, Nav, Navbar} from "react-bootstrap"
import CartWidget from "./CartWidget";
import './CartWidget.css'

const NavBar = () =>{
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">               
            Chino Store
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Armas</Nav.Link>
            <Nav.Link href="#pricing">Reseñas</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>        
      </Navbar>    

    )
};

export default NavBar;