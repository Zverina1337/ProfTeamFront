import React, {useContext, useEffect, useState} from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Context } from './../index';
import { observer } from 'mobx-react-lite';
import ProductCard from './../components/ProductCard';
import { getProducts } from './../http/productAPI';

const Shop = () => {
    const {product} = useContext(Context)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getProducts().then(data => product.setData(data)).finally(setLoading(false))
    }, [product])
    
    return (
        <Container className='mt-4'>
            <Row className='justify-content-center'>
                {loading && <Spinner animation={'border'}/>}
                {product.data.map(({id, name, description, price}) => 
                    <ProductCard key={id} id={id} name={name} desc={description} price={price}/>
                )}
            </Row>
        </Container>
    );
}

export default observer(Shop);
