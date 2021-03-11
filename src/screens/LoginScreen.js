import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

function LoginScreen() {
    return (
        <FormContainer>
            <h1>Sing In</h1>
            
            <Form onSubmit="">
                <Form.Group controlId='email'>
                    <Form.Label>E-mail Adress</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter your E-mail'
                        >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>PassWord</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter your Password'
                        >

                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Sign In
                </Button>    
            </Form>
            <Row className='py-3'>
                <Col>
                    New Customer? <Link 
                                    to='/register'>
                                    Register
                                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen
