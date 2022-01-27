import React from 'react'
import './Header.css'
import { Nav, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='overall'>
          <div className='sec'>
            <Navbar bg="warning" className='w-100' expand="md">
              <Container>
                <Navbar.Brand href="#"><h3>MY PORTFOLIO</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '200px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1"><Link to='/' className='link'>Home</Link></Nav.Link>
                    <Nav.Link href="#action1"><Link to='/About' className='link'>About</Link></Nav.Link>
                    <Nav.Link href="#action1"><Link to='/Services' className='link'>Services</Link></Nav.Link>
                    <Nav.Link href="#action1"><Link to='/Contact' className='link'>Contact</Link></Nav.Link>
                    <Nav.Link href="#action1"><Link to='/Project' className='link'>Project Done</Link></Nav.Link>
                    <Nav.Link href="#action1"><Link to='/Skills' className='link'>Skills</Link></Nav.Link>
                  </Nav>
                  <a href="https://github.com/egbebihamid" className='link'><i class="fab fa-github-square"></i></a>
                  <a href="https://wa.me/+2348051747368" id="whatapp"><i class="fab fa-whatsapp-square"></i></a>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
    )
}

export default Header
