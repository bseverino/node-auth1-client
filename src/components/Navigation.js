import React from 'react'
import { connect } from 'react-redux'
import axiosWithAuth from '../utils/axiosWithAuth'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

import { logoutStart } from '../store/actions'

const Link = styled(NavLink)`
    // color: blue;

    // &:hover {
    //     cursor: pointer;
    //     color: black;
    // }
`

const Navigation = props => {
    const history = useHistory()
    const loggedIn = props.loggedIn
    const logoutStart = props.logoutStart

    const logout = () => {
        logoutStart()
        history.push('/')
    }

    return (
        <Navbar color='light' expand='md'>
            <NavbarBrand>User Database</NavbarBrand>
            {loggedIn ? (
                <Nav className='mr-auto' navbar>
                    <NavItem>
                        <Link href='#' onClick={() => history.push('/users')}>Users</Link>
                    </NavItem>           
                    <NavItem>
                        <Link href='#' onClick={logout}>Log Out</Link>
                    </NavItem>
                </Nav>
            ) : (
                <Nav className='mr-auto' navbar>
                    <NavItem>
                        <Link href='#' onClick={() => history.push('/')}>Log In</Link>
                    </NavItem>
                    <NavItem>
                        <Link href='#' onClick={() => history.push('/register')}>Register</Link>
                    </NavItem>
                </Nav>
            )}
        </Navbar>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, { logoutStart })(Navigation)