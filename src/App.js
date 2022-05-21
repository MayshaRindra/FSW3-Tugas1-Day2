import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Link, Router} from 'react-router-dom';
import  { Home, Menu, About, Footer }  from './pages';
// import { Footer } from './component/Footer';
// import Navbar from "./component/Navbar";
import {Navbar, Nav, Container} from "react-bootstrap";


function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">DearBee</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/menu">Menu</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
