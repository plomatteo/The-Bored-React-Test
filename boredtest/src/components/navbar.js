import React from "react"
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useGlobalContext } from "../context/context";
import logo from "../assets/img/boredAppLogo.png"

function Navbar1() {

  const { favourite } = useGlobalContext();

    return (
        <>
  <Navbar className='grey' variant="dark">
    <Container>
    <Navbar.Brand> <img src={logo} /> </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link> <Link className="nav-white-link" to="/">Home</Link></Nav.Link>
      <Nav.Link> <Link className="nav-white-link" to="/search">Search</Link></Nav.Link>
      <Nav.Link>  <Link className="nav-white-link" to="/favourite">Favourite Activities <span id='favourite-counter'>{favourite.length}</span></Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    )
}

export default Navbar1;