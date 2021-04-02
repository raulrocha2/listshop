import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

function PaymentScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if (!shippingAddress.address) {
        history.push('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />

            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Selecione o Modo de Pagamento</Form.Label>
                    <Col>
                        <Form.Check 
                        name='radios'  
                        label="Finalizar pelo WhatsApp" 
                        type='radio' 
                        id={`radio-1`} 
                        value = 'whatsapp'
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <Form.Check  
                        name='radios' 
                        label="Cartão de Credito" 
                        type='radio' 
                        id={`radio-2`} 
                        value = 'paypal'
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        
                        />
                        <Form.Check
                        disabled
                        type='radio'
                        label="Boleto (disabled)"
                        name='radios'
                        id={`radio-4`}
                        value = 'boleto'
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <Form.Check
                        disabled
                        type='radio'
                        label="Pix (disabled)"
                        name='Pix'
                        id={`radio-5`}
                        value = 'pix'
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        />
   
                    </Col>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
