import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { 
    Nav, Navbar, Container, Form, FormControl, Button, NavDropdown 
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

function DropCategory() {
    
    const productList = useSelector(state => state.productList)
    const {products} = productList

    const productCategoryFull = products.map(product => (product.category))
    const productCategoryClean = productCategoryFull.filter(function(productCatery, index){
        return productCategoryFull.indexOf(productCatery) === index
    })
    
    return (
        <div>

            <NavDropdown key='key1' title='Categorias'>
                {productCategoryClean.map(
                    (category, index) => (
                        
                        <LinkContainer to={`/category/${category}`} key={index}>
                            <NavDropdown.Item key={index}>{category}</NavDropdown.Item>
                        </LinkContainer>
                    
                    
                    ),
                )}
             </NavDropdown>
        </div>
    )
}

export default DropCategory
