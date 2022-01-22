import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    return (
        <><Navbar className='fixed-top' bg="light" expand={false}>
            <Container>
                <Navbar.Brand as={HashLink} to="/"><h5 className='nav fw-bold'>Home</h5></Navbar.Brand>
                <Navbar.Toggle className="toggle text-white" aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel"><h5 className="bg-dark text-white px-3 py-3 b rounded-3">COUNCIL FOR ALLIED AND HEALTHCARE PROFESSIONALS</h5></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-center" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link as={HashLink} to="/"><h5>Home</h5></Nav.Link>
                            </Nav.Item>
                            <hr />
                            <Nav.Item>
                                <Nav.Link as={HashLink} to="/"><h5>Global Database</h5></Nav.Link>
                            </Nav.Item>
                            <hr />
                            <Nav.Item>
                                <Nav.Link as={HashLink} to="/"><h5>Registered Volunteers</h5></Nav.Link>
                            </Nav.Item>
                            <hr />
                            <Nav.Item>
                                <Nav.Link as={HashLink} to="/"><h5>Composition Of Council</h5></Nav.Link>
                            </Nav.Item>
                            <hr />
                            <Nav.Item>
                                <Nav.Link as={HashLink} to="/services"><h5>Our Services</h5></Nav.Link>
                            </Nav.Item>
                            <hr />
                            <Nav.Item>
                                <Nav.Link as={HashLink} to="/"><h5>Composition Of Council</h5></Nav.Link>
                            </Nav.Item>
                            <hr />
                            <Nav.Item>
                                <Nav.Link as={HashLink} to="/"><h5>Conference On Allied and Healthcare Bill</h5></Nav.Link>
                            </Nav.Item>
                            <hr />
                            <Nav.Item>
                                <Nav.Link as={HashLink} to="/contact"><h5>Contact Us</h5></Nav.Link>
                            </Nav.Item>
                            <hr />
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>


            {/* <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="fs-6 fw-bold nav-clr border" href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className='d-flex justify-content-center border'>
                            <Nav.Link as={HashLink} to="/" className="ps-2 fs-6 fw-bold nav-clr">Global Database</Nav.Link>
                            <Nav.Link as={HashLink} to="/" className="ps-2 fs-6 fw-bold nav-clr" >Registered Volunteers</Nav.Link>
                            <Nav.Link as={HashLink} to="/" className="ps-2 fs-6 fw-bold nav-clr" >Composition Of Council</Nav.Link>
                            <Nav.Link as={HashLink} to="/services" className="ps-2 fs-6 fw-bold nav-clr" >Our Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/" className="ps-2  fs-6 fw-bold nav-clr" >Conference On Allied and Healthcare Bill</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact" className="ps-2 fs-6 fw-bold nav-clr" >Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </>
    );
};

export default Header;