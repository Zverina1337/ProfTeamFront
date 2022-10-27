import React,{useContext} from 'react';
import {Card, Button} from 'react-bootstrap';
import { Context } from './../index';
import {observer} from 'mobx-react-lite';
import { addToCart } from '../http/productAPI';
import { useLocation } from 'react-router-dom';

const ProductCard = ({id, name, desc, price, img}) => {
    const {user} = useContext(Context)
    const location = useLocation();
    if(user.isAuth)
    return (
        <Card style={{ width: '18rem' , margin: '20px'}}>
        <Card.Body className='mt-3'>
            <Card.Title>{name}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
            <hr/>
        <Card.Text>
            Цена: <span style={{fontWeight: 'bold'}}>{price}</span>
        </Card.Text>
            {
                <Button variant={'outline-dark'} className='m-2' onClick={() => addToCart(id).then(data => console.log(data))}>Добавить в корзину</Button>
            }
        </Card.Body>
    </Card>
    );
}

export default observer(ProductCard);
