import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { register } from '../actions/userActions'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function RegisterScreen({location, history}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password != confirmPassword) {
            setMessage('Senhas não são iguais ')
        } else {
            dispatch(register(name, email, phoneNumber, password))
        }
        
    }

    return (
        <FormContainer>
            <h1>Simples Cadastro</h1>
            
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}

            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Seu Nome</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Digite seu nome'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Endereço de E-mail </Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder='exemplo@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='phoneNumber'>
                    <Form.Label>Celular </Form.Label>
                   
                        <PhoneInput
                            country={'br'}
                            value={phoneNumber}
                            onChange={phoneNumber => setPhoneNumber(phoneNumber)}
                        />
                       
                    </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Digite um senha '
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                       >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>Confirmar Senha</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Confirmar senha'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        >

                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Salvar
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    Já tenho uma conta? <Link 
                                    to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                                    Logar
                                    </Link>
                </Col>
            </Row>    
            
        </FormContainer>
    )
}

export default RegisterScreen
