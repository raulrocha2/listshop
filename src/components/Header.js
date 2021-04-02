import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    Nav, Navbar, Container, Form, FormControl, Button, NavDropdown 
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'
import DropCategory from './DropCategory'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }
    

    return (
        <header>
            <Navbar bg="primary" expand="lg" collapseOnSelect >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Catalogo-Shop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <DropCategory />
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                   
                                <i className="fas fa-shopping-cart"> </i>
                                Carrinho
                                </Nav.Link>
                            </LinkContainer>
                            
                            {userInfo && !userInfo.isAdmin ? (
                                <NavDropdown title='Minha Conta'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>{userInfo.name}</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>

                            ) : userInfo && userInfo.isAdmin ?(
                                <NavDropdown title='Gerenciar Site' id='adminmenue'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>{userInfo.name}</NavDropdown.Item>
                                    </LinkContainer>
                                    
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Usuários</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Produtos</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Pedidos</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                                    
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                            )}
                            
                               
                        </Nav>
                        <SearchBox />
                    
                    
                    </Navbar.Collapse>
                </Container>    
            </Navbar>
        </header>
    )
}

export default Header
