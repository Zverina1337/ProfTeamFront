import React, {useContext, useState} from 'react';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import { Context } from './../index';
import {observer} from 'mobx-react-lite';
import { Link , useLocation, useNavigate} from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './../utils/consts';
import { login } from '../http/userAPI.js';
import { registration } from './../http/userAPI';


const Auth = () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fio, setFio] = useState('')
    const [showError, setShowError] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const click = async () => {
        try{
            let data;
            if(isLogin){
                data = await login(email, password)
            }else{
                data = await registration(fio, email, password)
            }
            user.setUser(data.user_token)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        }catch(e){
            console.log(e)
            setShowError(true)
            setError(e.response?.data.error)
        }
        
    }
    return (
        <>
        {showError &&
        <Container className="d-flex justify-content-center align-items-center">
            <Alert variant="danger" onClose={() => setShowError(false)} dismissible style={{width:"400px"}}>
            <Alert.Heading>{error?.message}</Alert.Heading>
                <p>{error?.errors?.password}</p>
                <p>{error?.errors?.email}</p>
                <p>{error?.errors?.fio}</p>
            </Alert>
        </Container>
        }
        <Container style={{height:'900px'}} className="d-flex justify-content-center align-items-center">
            <Form>
                {!isLogin &&
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ФИО</Form.Label>
                        <Form.Control type="text" placeholder="Введите ФИО" value={fio} onChange={e => setFio(e.target.value)} border={'danger'}/>
                    </Form.Group>
                }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Введите email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    {isLogin ?
                        <Link to={REGISTRATION_ROUTE} >Зарегистрироваться</Link>
                        :
                        <Link to={LOGIN_ROUTE} >Уже есть аккаунт?</Link>
                    } 
                </Form.Group>
                <Button variant="primary" onClick={click} className='mt-3'>
                    Войти
                </Button>
            </Form>
        </Container>
        </>
    );
}

export default observer(Auth);
