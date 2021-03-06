import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Row, Col, Form, FormGroup, Label, Input, Button, Spinner } from 'reactstrap'

import { loginStart } from '../../store/actions'

const initialCredentials = {
    username: '',
    password: ''
}

const Login = props => {
    const history = useHistory()
    const loggedIn = props.loggedIn
    const loginStart = props.loginStart

    const [credentials, setCredentials] = useState(initialCredentials)
    const [error, setError] = useState('')
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        loggedIn && history.push('/users')
    }, [loggedIn])

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        loginStart(credentials)

        // axiosWithAuth().post('/auth/login', credentials)
        //     .then(res => {
        //         console.log(res)
        //         setError('')
        //         setIsFetching(true)
        //         history.push('/users')
        //     })
        //     .catch(err => {
        //         console.log(err)
        //         setError('Username and/or password incorrect.')
        //     })
    }

    return (
        <Row>
            <Col xs={{ offset: 4, size: 4}}>
                <h2>Login</h2>
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
                        <Button>Login</Button>
                    </FormGroup>
                </Form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {isFetching && <Spinner color='success' />}
            </Col>
        </Row>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, { loginStart })(Login)