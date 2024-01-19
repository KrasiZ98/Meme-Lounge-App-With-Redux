

import {
    loginUser as fetchLoginUserApi,
    registerUser as fetchRegisterUserApi,
}
    from "./actionAuthCrud";

import {
    fetchUserError,
    fetchUserLogin,
    fetchUserRegister,
    fetchUserSuccess
}
    from "./dispatchActionsAuth";

export const loginUserApi = (user, navigate) => async (dispatch) => {
    try {

        const loggedUser = await fetchLoginUserApi(user);
        if (typeof loggedUser === "string") {

            dispatch(fetchUserError(loggedUser));
            console.log("Dispatch fetchUserError...");
            setTimeout(() => {
                dispatch(fetchUserError(null));
            }, 4000);
            navigate("/login");

        } else {
            console.log("Dispatch loggedUser...")
            dispatch(fetchUserLogin(loggedUser));

            console.log("Dispatch messageSucces...")
            const messageSucces = "User Login Success.";
            dispatch(fetchUserSuccess(messageSucces));

            setTimeout(() => {
                dispatch(fetchUserSuccess(null));
            }, 4000);

            console.log("Naviagte to home '/'...");
            navigate("/");
        }

    } catch (error) {
        console.log("Dispatch fetchUserError...");
        console.error("Error form loginUserApi:", error.message);
        dispatch(fetchUserError(error.message));
        navigate("/login");
    }
} 



export const registerUserApi = (user, navigate) => async (dispatch) => {
    try {

        const loggedUser = await fetchRegisterUserApi(user);
        if (typeof loggedUser === "string") {

            dispatch(fetchUserError(loggedUser));
            setTimeout(() => {
                dispatch(fetchUserError(null));
            }, 4000);
            console.log("Dispatch fetchUserError...");
            navigate("/register");

        } else {
            console.log("Dispatch loggedUser...")
            dispatch(fetchUserRegister(loggedUser));


            console.log("Dispatch messageSucces...")
            const messageSucces = "User register Success.";
            dispatch(fetchUserSuccess(messageSucces));

            setTimeout(() => {
                dispatch(fetchUserSuccess(null));
            }, 4000);

            console.log("Naviagte to home '/'...");
            navigate("/");
        }

    } catch (error) {
        console.log("Dispatch fetchUserError...");
        console.error("Error form loginUserApi:", error.message);
        dispatch(fetchUserError(error.message));
        navigate("/register");
    }
} 