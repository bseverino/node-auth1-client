import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE
} from '../actions'

const initialState = {
    users: null,
    isFetching: false,
    error: '',
    loggedIn: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS_START:
            return {
                ...state,
                isFetching: true
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                users: action.payload
            }
        case GET_USERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer