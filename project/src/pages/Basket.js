import React, {useContext, useEffect, useState} from 'react';
import { Context } from './../index';
import { observer } from 'mobx-react-lite';
import { Container, Row, Alert, Spinner } from 'react-bootstrap';
import { getProductsCart } from './../http/productAPI';
import BasketObj from './../components/BasketObj';

const Basket = () => {
    const {basket, user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getProductsCart().then(data => basket.setData(data)).finally(setLoading(false))
    }, [basket])
    const isNull = basket.data.length === 0
    if(isNull){
        return (
            <Container className='align-items-center'>
                {loading &&  <Spinner animation={'border'}/>}
                <Alert variant="danger" className='mt-5'>
                    <Alert.Heading>В корзине отсутсвуют товары</Alert.Heading>
                </Alert>
            </Container>
        )
    }else if(!user.isAuth){
        return(
            <Container className='align-items-center'>
                {loading &&  <Spinner animation={'border'}/>}
                <Alert variant="danger" className='mt-5'>
                    <Alert.Heading>Вы не авторизованы</Alert.Heading>
                </Alert>
            </Container>
        )
    }else if(user.isAuth && !isNull){
        let filtered_basket = []
        for(let i = 0; i < basket.data.length; i++){
            for(let j = 1; j < basket.data.length; j++){
                console.log(basket.data[j].product_id === basket.data[i].product_id)
                if(basket.data[j].product_id === basket.data[i].product_id){
                    filtered_basket.push(basket.data[i])
                }
            }
        }
        console.log(filtered_basket)
        return (
            <Container className='mt-4'>
                <Row className='justify-content-center'>
                    {loading &&  <Spinner animation={'border'}/>}
                    {!isNull && basket.data.map(({id, name, description, price, product_id}) => {
                            return <BasketObj key={id} id={id} name={name} description={description} price={price} product_id={product_id} />
                        }
                    
                    )}
                </Row>
            </Container>
        );
    }
}

export default observer(Basket);
