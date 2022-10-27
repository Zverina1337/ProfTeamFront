import React, {useContext, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import { Context } from './../index';
import { observer } from 'mobx-react-lite';
import ProductCard from './../components/ProductCard';
import { getProducts } from './../http/productAPI';

const Shop = () => {
    const {product} = useContext(Context)
    useEffect(() => {
        getProducts().then(data => product.setData(data))
    }, [product])
    return (
        <Container className='mt-4'>
            <Row>
                {product.data.map(({id, name, description, price}) => 
                    <ProductCard key={id} id={id} name={name} desc={description} price={price}/>
                )}
            </Row>
        </Container>
    );
}

export default observer(Shop);
