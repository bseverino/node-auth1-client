import React from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const Link = styled(NavLink)`
    // color: blue;

    // &:hover {
    //     cursor: pointer;
    //     color: black;
    // }
`

const Navigation = () => {
    const history = useHistory()

    const logout = () => {
        axiosWithAuth().get('/auth/logout')
            .then(res => {
                console.log(res)
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Navbar color='light' expand='md'>
            <NavbarBrand>User Database</NavbarBrand>
            <Nav className='mr-auto' navbar>
                <NavItem>
                    <Link href='#' onClick={() => history.push('/users')}>Users</Link>
                </NavItem>
                <NavItem>
                    <Link href='#' onClick={() => history.push('/register')}>Register</Link>
                </NavItem>
                <NavItem>
                    <Link href='#' onClick={() => history.push('/')}>Log In</Link>
                </NavItem>
                <NavItem>
                    <Link href='#' onClick={logout}>Log Out</Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Navigation