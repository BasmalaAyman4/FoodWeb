import React, { useState, useEffect } from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../../assets/logo.png'
import { BsFillCartCheckFill, BsSearch } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const NavbarMenu = ({ size, cartItems, setCartItems }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [price, setPrice] = useState(0)
    const handlePrice = () => {
        let all = 0;
        cartItems.map((item) => (
            all += item.price
        ))
        setPrice(all)
    }
    const handleRemove = (id) => {
        const arr = cartItems.filter((item) => item.id !== id);
        setCartItems(arr);
    }
    useEffect(() => {
        handlePrice();
    })
    return (

        <>
            <div  >
                <Navbar collapseOnSelect expand="lg" className="navBackground" >
                    <Container>
                        <Navbar.Brand href="#home"><img alt="" src={Logo} className='logo' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="coll">
                            <Nav className='me-auto na' >
                                <Nav.Link href="/" className='me-3'>Product</Nav.Link>
                                <Nav.Link href="/apricot" className='me-3'>Best Seller</Nav.Link>
                                <Nav.Link href="/contact" className='me-3'>New Arrival</Nav.Link>
                                <Nav.Link href="/blog" className='me-3'>About Us</Nav.Link>
                                <Nav.Link href="/blo" className='me-3'>Contact Us</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets"><BsSearch className='shopCart me-3' /></Nav.Link>

                                <Nav.Link href="" onClick={handleShow}><BsFillCartCheckFill className='shopCart sh me-3' /><span className='size'>{size}</span></Nav.Link>
                                <Modal show={show} onHide={handleClose} animation={false}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className='my__cart'>My Cart ({size})</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {
                                            cartItems.map((item) => (
                                                <div className='allItems'>
                                                    <div className='prodCart'>
                                                        <img src={item.img1} className='size__img' />
                                                        <div>
                                                            <p>{item.title}</p>
                                                            <p> color : black</p>
                                                            <p className='cart__price'>{item.price} EGP</p>
                                                        </div>
                                                    </div>
                                                    <RiDeleteBin6Line className='bin' onClick={() => handleRemove(item.id)} />
                                                </div>
                                            ))
                                        }
                                    </Modal.Body>
                                    <div className='sub'>
                                        <p>Sub Total</p>
                                        <p>{price}</p>
                                    </div>
                                    <div className='go__btn'>
                                        <button className='go'>go to cart</button>
                                    </div>
                                </Modal>
                                <Nav.Link href="/shoppingCart"><BiUser className='shopCart me-3'></BiUser></Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

        </>
    )
}
export default NavbarMenu;