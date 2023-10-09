import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Datanum from "../DataFile/Datanum.json";
import { Link } from "react-router-dom";


function Topnavbar() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              {Datanum.map((user) => (
                <NavDropdown
                  title={user.name}
                  id="basic-nav-dropdown"
                  key={user.id}
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <Link to={"/youth"}>
                  <NavDropdown.Item href="#action/3.3">
                  Youth For Asia 2023
                </NavDropdown.Item>
                  </Link>
                  
               
                </NavDropdown>
              ))}
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </>
  );
}

export default Topnavbar;
