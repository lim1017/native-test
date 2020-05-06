import React from 'react';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { StyleSheet } from 'react-native';



const Navbars = (props) =>{
 
  return (

<Navbar className='header' bg="light" expand="lg">
  {props.leftButton ? <span style={{marginRight: '5px'}}> {props.leftButton} </span> : null }
  
<Navbar.Brand href="#home"><img src={require(`../../assets/StaffBumpLogo/WebFiles/StaffBumpLogo_ReverseHorizontal.png`)} alt="Smiley face" height="42" width="188" /></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="#home">Homes</Nav.Link>
    <Nav.Link href="#link">Link</Nav.Link>
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
  </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-success">Search</Button>
  </Form>
</Navbar.Collapse>
</Navbar>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});

export default Navbars
