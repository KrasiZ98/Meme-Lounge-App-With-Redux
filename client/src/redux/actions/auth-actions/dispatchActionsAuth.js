import { FETCH_USER_ERROR, FETCH_USER_LOGIN, FETCH_USER_LOGOUT, FETCH_USER_REGISTER, FETCH_USER_SUCCESS, FORM_USER_ERROR } from "./actionsTypes";

export const fetchUserRegister = (user) => ({
    type: FETCH_USER_REGISTER,
    payload: user,
});

export const fetchUserLogin = (user) => ({
    type: FETCH_USER_LOGIN,
    payload: user,
});

export const fetchUserSuccess = (message) => ({
    type: FETCH_USER_SUCCESS,
    payload: message,
});

export const fetchUserLogout = () => ({
    type: FETCH_USER_LOGOUT,
});

export const fetchUserError = (error) => ({
    type: FETCH_USER_ERROR,
    payload: error,
});

export const formUserError = (error) => ({
    type: FORM_USER_ERROR,
    payload: error,
});

