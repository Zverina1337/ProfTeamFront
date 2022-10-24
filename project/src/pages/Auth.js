import React, {useContext} from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { Context } from './../index';
import {observer} from 'mobx-react-lite';

const Auth = () => {
    const {user} = useContext(Context)
    console.log(user.isAuth)
    return (
        <Container style={{height:'900px'}} className="d-flex justify-content-center align-items-center">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Запомнить меня" />
                </Form.Group>
                <Button variant="primary" onClick={() => user.setIsAuth(true)}>
                    Войти
                </Button>
            </Form>
        </Container>
        
    );
}

export default observer(Auth);
