import React, {useContext} from 'react';
import { Context } from './../index';
import { observer } from 'mobx-react-lite';
import ProductCard from './../components/ProductCard';
import { Container, Row } from 'react-bootstrap';

const Orders = () => {
    const {order} = useContext(Context)

    return (
        <Container className='mt-4'>
            <Row>
                {order.data.map(({id, name, description, price, img}) => 
                    <ProductCard key={id} id={id} name={name} desc={description} price={price} img={img}/>
                )}
            </Row>
        </Container>
    );
}

export default observer(Orders);
