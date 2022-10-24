import React,{useContext} from 'react';
import {Card, Button} from 'react-bootstrap';
import { Context } from './../index';
import {observer} from 'mobx-react-lite';

const ProductCard = ({id, name, desc, price, img}) => {
    const {user} = useContext(Context)

    return (
        <Card style={{ width: '18rem' , margin: '20px'}}>
            <Card.Img variant="top" src={img} />
            <hr/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
            <hr/>
        <Card.Text>
            Цена: <span style={{fontWeight: 'bold'}}>{price}</span>
        </Card.Text>
            {user.isAuth &&
                <Button variant={'outline-dark'} className='m-2'>Добавить в корзину</Button>
            }
        </Card.Body>
    </Card>
    );
}

export default observer(ProductCard);
