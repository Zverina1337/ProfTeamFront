import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import { addToCart } from '../http/productAPI';

const ProductCard = ({id, name, desc, price, img}) => {
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
                <Button variant={'outline-dark'} className='m-2' style={{alignSelf: "flex-end"}} onClick={() => addToCart(id)}>Добавить в корзину</Button>
            }
        </Card.Body>
    </Card>
    );
}

export default observer(ProductCard);
