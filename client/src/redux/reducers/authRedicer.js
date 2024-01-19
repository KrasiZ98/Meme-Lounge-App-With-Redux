import { FETCH_USER_ERROR, FETCH_USER_LOGIN, FETCH_USER_LOGOUT, FETCH_USER_REGISTER, FETCH_USER_SUCCESS, FORM_USER_ERROR } from "../actions/auth-actions/actionsTypes";

const initialState = {
    user: {},
    serverError: null,
    formError: null,
    success: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN:
            console.log(action.payload)
            return {
                ...state, user: action.payload, serverError: null, formError: null,
            }
        case FETCH_USER_REGISTER:
            return {
                ...state, user: action.payload, serverError: null, formError: null,
            }
        case FETCH_USER_LOGOUT:
            return {
                ...state, user: {}, serverError: null, formError: null,
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state, success: action.payload, serverError: null, formError: null,
            }
        case FETCH_USER_ERROR:
            return {
                ...state, serverError: action.payload, formError: null,
            }
        case FORM_USER_ERROR:
            return {
                ...state, serverError: null, formError: action.payload,
            }
        default:
            return state
    };
};

export default authReducer;