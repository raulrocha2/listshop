import React from 'react'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../products'

function ProductScreen({ match }) {

    const product = products.find((p) => p._id == match.params.id)

    return (
        <div>
           <Link to="/" className='btn btn-light my-5'> Voltar </Link>
           <Row>
               <Col md={5}>
                   <Image src={product.image} alt={product.name} fluid />
               </Col>
               <Col md={3}>
                   <ListGroup variant="flush">
                       <ListGroup.Item>
                           <h3>{product.name}</h3>
                       </ListGroup.Item>
                       <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} vizualizações`} color={'#f8e825'} />
                       </ListGroup.Item>
                       <ListGroup.Item>
                           Preço: {product.price}
                       </ListGroup.Item>
                       <ListGroup.Item>
                           Descrição: {product.description}
                       </ListGroup.Item>

                   </ListGroup>
               </Col>
               <Col md={3}>
                   <Card>
                       <ListGroup variant="flush">
                           <ListGroup.Item>
                               <Row>
                                   <Col>Preço:</Col>
                                   <Col>
                                    <stron>{product.price}</stron>
                                   </Col>
                               </Row>
                           </ListGroup.Item>
                           <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'Estoque' : 'Esgotado'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {product.countInStock > 0 && (

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qtd</Col>
                                        <Col xs='auto' className='my-1'>
                                            <Form.Control
                                                as="select"
                                                value={product.countInStock}
                                                onChange={product.countInStock.lenght}
                                                >

                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item>
                                <Button className='btn-block' disabled={product.countInStock == 0} type='button'>Adicionar</Button>
                            </ListGroup.Item>

                       </ListGroup>
                   </Card>
               </Col>
           </Row>
        </div>
    )
}

export default ProductScreen
