import React from 'react';
import {Link,} from "react-router-dom";
import {
  Navbar,
  Button,
  NavbarBrand
} from 'reactstrap';
import "./App.css"

function NavBar() {
  return (
   
    <div className="jnavbar">
    <Navbar className="jnavbar2" color="link" light expand="md">
    <NavbarBrand><Link className="jhead" to="/">JEDI WEB ACADEMY</Link></NavbarBrand>
      <div className="ml-auto">
      <Button color="secondary"><Link className="jhead2" to="/cont">Join Us</Link></Button>
      </div>
    </Navbar>
  </div>

   
  )
}


export default NavBar;