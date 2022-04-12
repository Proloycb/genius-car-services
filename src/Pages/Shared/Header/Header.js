import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <>
            <Navbar bg="primary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} height= "30px" alt="" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className='text-white text-decoration-none me-3' to="/">Home</Link>
                        <Link className='text-white text-decoration-none me-3' to="/about">About</Link>
                        <Link className='text-white text-decoration-none' to="/login">Login</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;