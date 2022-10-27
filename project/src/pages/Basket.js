import React, {useContext, useEffect} from 'react';
import { Context } from './../index';
import { observer } from 'mobx-react-lite';
import ProductCard from './../components/ProductCard';
import { Container, Row, Alert } from 'react-bootstrap';
import { getProductsCart } from './../http/productAPI';

const Basket = () => {
    const {basket, user} = useContext(Context)
    useEffect(() => {
        getProductsCart().then(data => basket.setData(data))
    }, [basket])
    const isNull = basket.data.length === 0
    return (
        <Container className='mt-4'>
            <Row>
                {!isNull ? basket.data.map(({id, name, description, price, img}) => 
                    <ProductCard key={id} id={id} name={name} desc={description} price={price} img={img}/>
                )
                :
                user.isAuth ?
                <Alert variant="danger">
                <Alert.Heading>В корзине отсутствуют товары</Alert.Heading>
                </Alert>
                :
                <Alert variant="danger">
                <Alert.Heading>Вы не авторизованы</Alert.Heading>
                </Alert>
                }

            </Row>
        </Container>
    );
}

export default observer(Basket);
