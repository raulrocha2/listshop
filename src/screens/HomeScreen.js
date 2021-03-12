import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

function HomeScreen() {
    const [products, setProducts ] = useState([])


    useEffect(() => {
        console.log('useEffect Disparado')
        
        async function fetchProducts() {
            const {data} = await axios.get('http://127.0.0.1:8000/api/products/')
            setProducts(data)

        }

        fetchProducts()
        
    }, [])
    return (
        <div>
            
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}>  </Product>
                    </Col>
                    
                ))}
            </Row>

        </div>
    )
}

export default HomeScreen
