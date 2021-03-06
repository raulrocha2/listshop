import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                        
                    </Card.Title>
                </Link>
                <Button className='btn-block' disabled={product.countInStock == 0} type='button' size='sm'>Adicionar</Button>
                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} vizualizações`} color={'#f8e825'} />
                    </div>

                </Card.Text>
                <Card.Text as="h3">
                    {product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
