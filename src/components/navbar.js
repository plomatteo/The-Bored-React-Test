import React from "react"
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useGlobalContext } from "../context/context";
import logo from "../assets/img/boredAppLogo.png";
import { AiFillHeart } from "react-icons/ai";

function Navbar1() {

  const { favourite } = useGlobalContext();

    return (
        <>
  <Navbar className='grey' variant="dark">
    <Container>
    <Navbar.Brand> <img src={logo} /> </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link> <Link className="main-nav-link" to="/">Home</Link></Nav.Link>
      <Nav.Link> <Link className="main-nav-link" to="/search">Search</Link></Nav.Link>
      <Nav.Link>  <Link className="main-nav-link" to="/favourite">Favourites: <span id='favourite-counter'> <AiFillHeart/>{favourite.length}</span></Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    )
}

export default Navbar1;