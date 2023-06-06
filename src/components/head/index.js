import Image from 'next/image'

import { Nav, Navbar , Container, NavDropdown  } from 'react-bootstrap';



export default function HeadPage() {
  
  
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container fluid className="d-flex justify-content-between">
            
            <Navbar.Brand href="/">
              <Image src='/imagen/logo-grupo-Typsa-1.png' width={50} height={50} alt='Logo-Typsa' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto ">
              <NavDropdown title="Inicio" id="basic-nav-dropdown">
                <NavDropdown.Item href="/quienes-somos">Quiénes somos</NavDropdown.Item>
                <NavDropdown.Item href="/confiar-typsa">Confiar en TYPSA</NavDropdown.Item>
                <NavDropdown.Item href="/typsa-peru">TYPSA - PERÚ</NavDropdown.Item>
                <NavDropdown.Item href="/typsa-mundo">TYPSA en el mundo</NavDropdown.Item>
                <NavDropdown.Item href="/capacidad">Capacidades Digitales</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link href="/login" className="btn border-0">
                Oferta
              </Nav.Link> 
              
              </Nav>                  
            </Navbar.Collapse>
          </Container>
        </Navbar>
            
    </>
    );

}