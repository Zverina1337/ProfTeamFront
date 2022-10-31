import React, {useState, useContext} from 'react';
import { Card, Button } from 'react-bootstrap';
import { Context } from './../index';

const BasketObj = ({id, name, description, price, product_id}) => {
    const {basket} = useContext(Context)
    
    return (
        <Card bg={"dark"} text={'light'} className="mt-4">
        <Card.Header as="h5">{name}</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Button variant="primary">{price}</Button>
            </Card.Body>
        </Card>
    );
}

export default BasketObj;
