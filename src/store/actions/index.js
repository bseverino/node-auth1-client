import axiosWithAuth from '../../utils/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGOUT_START = 'LOGIN_START'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export const GET_USERS_START = 'GET_USERS_START'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'

export const loginStart = credentials => dispatch => {
    dispatch({ type: LOGIN_START })

    axiosWithAuth().post('/auth/login', credentials)
        .then(res => {
            console.log(res)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOGIN_FAILURE, payload: err.data })
        })
}

export const logoutStart = () => dispatch => {
    dispatch({ type: LOGOUT_START })

    axiosWithAuth().get('/auth/logout')
        .then(res => {
            console.log(res)
            dispatch({ type: LOGOUT_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOGOUT_FAILURE, payload: err.data })
        })
}

export const getUsers = () => dispatch => {
    dispatch({ type: GET_USERS_START })

    axiosWithAuth().get('/users')
        .then(res => {
            console.log(res)
            dispatch({ type: GET_USERS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: GET_USERS_FAILURE, payload: err })
        })
}
