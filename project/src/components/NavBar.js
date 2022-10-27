import React, {useContext} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { BASKET_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE, SHOP_ROUTE } from './../utils/consts';
import { Context } from './../index';
import {observer} from 'mobx-react-lite';
import { logout } from './../http/userAPI';

const NavBar = () => {
    const {user} = useContext(Context)

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
                        {user.isAuth ?
                            <Link to={SHOP_ROUTE} style={{textDecoration:"none",color:"white"}} onClick={() => {user.setIsAuth(false); user.setUser({}); logout()}}>Выйти из аккаунта</Link>
                            :
                            <Link to={LOGIN_ROUTE} style={{textDecoration:"none",color:"white"}}>Войти</Link>
                        }
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default observer(NavBar);
