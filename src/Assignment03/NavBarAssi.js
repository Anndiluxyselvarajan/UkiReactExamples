
  import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
class NavBarAssi extends Component{
    render(){
  return(
       <>
   <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Book Shop</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      
    </Nav>
   <Button href="/login" variant="outline-info">Login</Button>
   <Button href="/signup" variant="outline-info">Signup</Button>
  </Navbar>
  </>
  )
  }
}
export default NavBarAssi;