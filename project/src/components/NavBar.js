import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { BASKET_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE, SHOP_ROUTE } from './../utils/consts';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to={SHOP_ROUTE} style={{textDecoration:"none",color:"white"}}>Просто купить</Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link to={BASKET_ROUTE} style={{textDecoration:"none",color:"white"}}>Корзина</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={ORDERS_ROUTE} style={{textDecoration:"none",color:"white"}}>Оформленные заказы</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={LOGIN_ROUTE} style={{textDecoration:"none",color:"white"}}>Войти</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
