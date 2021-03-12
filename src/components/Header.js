import React from 'react'
import { 
    Nav, Navbar, Container, Form, FormControl, Button 
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>ListShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                   
                                <i className="fas fa-shopping-cart"> </i>
                                Carrinho
                                </Nav.Link>
                            </LinkContainer> 
                            <LinkContainer to="/login">
                            <Nav.Link>
                                <i className="fas fa-user"> </i>
                                    Login
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="btn btn-secondary my-2 my-sm-0">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>    
            </Navbar>
        </header>
    )
}

export default Header
