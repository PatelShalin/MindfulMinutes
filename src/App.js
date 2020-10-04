import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Meditation from "./Components/Meditation";
import Intro from "./Components/Intro";
import MonkMode from "./Components/MonkMode";
import AboutUs from "./Components/AboutUs";
import facebooklogo from "./images/facebooklogowhite.png"
import instalogo from "./images/instagramlogowhite.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";





class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar collapseOnSelect className ="nav" expand="lg" sticky="top" >
  <Navbar.Brand  bsPrefix= "navbar-title">Mindful Minutes</Navbar.Brand>
  <Navbar.Toggle  aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav  fill = "true">
      <Nav.Link className ="nav-items" href="#meditation">Meditation Sessions</Nav.Link>
      <Nav.Link className ="nav-items" href="#monkmode">Monk Mode</Nav.Link>
      <Nav.Link className ="nav-items" href="#aboutus">About Us</Nav.Link>
      <Nav.Link href="https://www.facebook.com/groups/2482762308645826">
      <img className="nav-logo" src={facebooklogo} alt="fb"/>
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/the.mindfulminutes/">
      <img className="nav-logo" src={instalogo} alt ="insta"/>
      </Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    <Intro/>
    <Meditation/>
    <MonkMode/>
    <AboutUs/> 
      </div>
    );
  }
}

export default App;
