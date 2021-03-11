import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

function RegisterScreen() {
    return (
        <FormContainer>
            <h1>Sing In</h1>
            
            
            <Form onSubmit="">
                <Form.Group controlId='name'>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter your Name'
                        >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>E-mail Adress</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder='Enter your E-mail'
                        >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>PassWord</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Enter your Password'
                       >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>Confirm PassWord</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Enter your Password'
                        >

                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Register
                </Button>
            </Form>
            
        </FormContainer>
    )
}

export default RegisterScreen
