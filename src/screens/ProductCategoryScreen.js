import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { phoneSales } from '../actions/userActions'


function ProductCategoryScreen({ history, match, location }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error, loading, products, page, pages} = productList

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userPhoneSales = useSelector(state => state.userPhoneSales)
    const { salesPhone } = userPhoneSales

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword)) 
        dispatch(phoneSales())     
        
    }, [dispatch, keyword])
    const category = match.params.category
    const productByCategory = products.filter(product => (product.category === category))
   
    return (
        <div>
            {loading ? <Loader />
                : error ? <Message variant="danger">{error}</Message>
                    :
                    <div>
                        <Row>
                            {productByCategory.map(product => (
                                
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product}>  </Product>
                                </Col>
                        
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} / >
                    </div>

            }
         

        </div>
    )
}


export default ProductCategoryScreen
