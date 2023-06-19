import React, { useState, useEffect } from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../../assets/logo.png'
import { BsFillCartCheckFill, BsSearch } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';
export default function NavbarMenu() {
    const [navBg, setNavBg] = useState(false);
    const changeNavBg = () => {
        window.scrollY >= 200 ? setNavBg(true) : setNavBg(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        }
    }, [])



    return (

        <>
            <div onScroll={changeNavBg}>
                <Navbar collapseOnSelect expand="lg" className={navBg ? "navBackground" : "nav"} >
                    <Container className={navBg ? "" : 'dot'} >
                        <Navbar.Brand href="#home"><img alt="" src={Logo} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="coll">
                            <Nav className='me-auto na' >
                                <Nav.Link href="/" className='me-5'>Home</Nav.Link>
                                <Nav.Link href="/apricot" className='me-5'>Apricot</Nav.Link>
                                <Nav.Link href="/contact" className='me-5'>Contact-Us</Nav.Link>
                                <Nav.Link href="/blog" className='me-5'>Blog</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets"><BsSearch className='shopCart' /></Nav.Link>
                                <Nav.Link href="#deets"><BsFillCartCheckFill className='shopCart' /></Nav.Link>
                                <Nav.Link href="/login" >Login</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

        </>
    )
}
