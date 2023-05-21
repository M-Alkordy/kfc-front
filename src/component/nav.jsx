
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./nav.css"



const nav = () => {
    return(
        <div>
        <Navbar bg="light" expand="lg" className='fixed-top nav1'>
      <Container >
        <Navbar.Brand>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='nav2'>
        
          <NavDropdown title="menu" id="basic-nav-dropdown" className='drop' >
            <div className='container'>
              <div className='row'>
                <div className='col-lg-4'>
                  <ul className='d-flex flex-column list'>
                    <li>Special offer</li>
                    <li>Combos</li>
                    <li>Family Meals</li>
                    <li>Nuggets</li>
             
              
            
              </ul>
              </div>
              <div className='col-lg-4'>
                <ul className='d-flex flex-column list'>
                <li>Sanwiches</li>
                    <li>Tenders</li>
                    <li>Bowls & Pot Pies</li>
                    <li>Kids Meal</li>
                </ul>
              </div>
              <div className='col-lg-4'>
              <ul className='d-flex flex-column list'>
              <li>Sides & Add Ons</li>
                    <li>Sauces</li>
                    <li>Drinks</li>
              </ul>
              </div>
             
              
              </div>
              </div>
              
              
              
            </NavDropdown>
           
          <Nav.Link href="#link">about</Nav.Link>
           
           
            <Nav.Link href="#link">career</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    )
}





export default nav;