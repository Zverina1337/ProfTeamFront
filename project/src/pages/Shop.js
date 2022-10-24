import React, {useContext} from 'react';
import { Container, Row } from 'react-bootstrap';
import { Context } from './../index';
import { observer } from 'mobx-react-lite';
import ProductCard from './../components/ProductCard';

const Shop = () => {
    const {product} = useContext(Context)
    console.log(product.data)
    return (
        <Container className='mt-4'>
            <Row>
                {product.data.map(({id, name, description, price, img}) => 
                    <ProductCard key={id} id={id} name={name} desc={description} price={price} img={img}/>
                )}
            </Row>
        </Container>
    );
}

export default observer(Shop);
