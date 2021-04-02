import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { getUserDetails, updateUserbyAdmin } from '../actions/userActions'
import { USER_UPDATE_ADMIN_RESET } from '../constants/userConstants'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


function UserEditScreen({ match, history }) {

    const userId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userEditbyAdmin = useSelector(state => state.userEditbyAdmin)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = userEditbyAdmin

    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: USER_UPDATE_ADMIN_RESET })
            history.push('/admin/userlist')
        } else {
            
            if (!user.name || user._id !== Number(userId)) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setPhoneNumber(user.phoneNumber)
                setIsAdmin(user.isAdmin)
            }
        }

    }, [user, userId, successUpdate, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUserbyAdmin({ _id: user._id, name, email, phoneNumber, isAdmin }))
    }


    return (
        <div>
            <Link to='/admin/userlist' className='btn btn-light my-5'>
                Voltar
            </Link>

            <FormContainer>
                <h1>Editar Usuário</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control

                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            {user && user.isAdmin ? (
                                <Form.Group controlId='phoneNumber'>
                                    <Form.Label>WhatsApp da Loja</Form.Label>
                                        <PhoneInput
                                            country={'br'}
                                            value={phoneNumber}
                                            onChange={setPhoneNumber}
                                        />
                                </Form.Group>
                            ): (
                                <Form.Group controlId='phoneNumber'>
                                <Form.Label>Celular</Form.Label>
                                    <PhoneInput
                                        country={'br'}
                                        value={phoneNumber}
                                        onChange={setPhoneNumber}
                                    />
                                </Form.Group>
                            )}
                            

                            <Form.Group controlId='isadmin'>
                                <Form.Check
                                    type='checkbox'
                                    label='Is Admin'
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                >
                                </Form.Check>
                            </Form.Group>

                            <Button type='submit' variant='primary'>
                                Atualizar
                        </Button>

                        </Form>
                    )}

            </FormContainer >
        </div>

    )
}

export default UserEditScreen
