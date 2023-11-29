import React from 'react'
import './css/Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';



function Header() {
  const {user} = useSelector((state)=>state.user)
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar fixed-top">
      <Container>
        <Navbar.Brand>Dapper Dash</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/home'}><Nav.Link href="#home">Home</Nav.Link></Link>
            <Nav.Link href="#booking">My Bookings</Nav.Link>
            <Link to={'/courtRegistration'}> {user.role===2 && 
            <Nav.Link href="#courtRegistration">Court Registration</Nav.Link>}
            </Link>
          </Nav>
          <Nav>
          <NavDropdown title={`${user.firstName} ${user.lastName}`} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;