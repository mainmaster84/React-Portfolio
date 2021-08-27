import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand>Ronald</Navbar.Brand>
              <Nav>
                <Link className="link" to="/">About Me</Link>
                <Link className="link" to="/Portfolio">Portfolio</Link>
                <Link className="link" to="/Contact">Contact</Link>
                <Link className="link" to="/Resume">Resume</Link>
              </Nav>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;