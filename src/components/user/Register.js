import React, { useState } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import { Row, Col, Form, FormGroup, Label, Input, Button, Spinner } from 'reactstrap'

const initialCredentials = {
    username: '',
    password: ''
}

const Register = () => {
    const history = useHistory()
    const [credentials, setCredentials] = useState(initialCredentials)
    const [error, setError] = useState('')
    const [isFetching, setIsFetching] = useState(false)

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axiosWithAuth().post('/auth/register', credentials)
            .then(res => {
                console.log(res)
                setError('')
                setIsFetching(true)
                axiosWithAuth().post('/auth/login', credentials)
                    .then(res => {
                        console.log(res)
                        history.push('/users')
                    })
            })
            .catch(err => {
                console.log(err)
                setError('Missing username and/or password.')
            })
    }

    return (
        <Row>
            <Col xs={{ offset: 4, size: 4}}>
                <h2>Register</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for='username'>Username</Label>
                        <Input
                            type='text'
                            name='username'
                            id='username'
                            value={credentials.username}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input
                            type='password'
                            name='password'
                            id='password'
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button>Register</Button>
                    </FormGroup>
                </Form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {isFetching && <Spinner color='success' />}
            </Col>
        </Row>
    )
}

export default Register