import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { loginUserApi } from '../../redux/actions/auth-actions/actionsAuth';
import { formUserError } from '../../redux/actions/auth-actions/dispatchActionsAuth';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formError = useSelector((state) => state.auth.formError);
    const serverError = useSelector((state) => state.auth.serverError);
    console.log(formError, serverError)

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setLoginForm((oldValues) => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.values(loginForm).every((value) => value !== "")) {
            dispatch(loginUserApi(loginForm, navigate));
        } else {
            const errorForm = "Please write the empty fields.";
            dispatch(formUserError(errorForm));
            setTimeout(() => {
                dispatch(formUserError(null));
            }, 4000);
        }
    }

    return (
        <section id="login">
            {formError && <h2 style={{ color: "red" }}>{formError}</h2>}
            {serverError && <h2 style={{ color: "red" }}>{serverError}</h2>}
            <form id="login-form" onSubmit={handleSubmit}>
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        placeholder="Enter Email"
                        name="email"
                        type="text"
                        onChange={handleChange}
                        value={loginForm.email}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        onChange={handleChange}
                        value={loginForm.password}
                    />
                    <input
                        type="submit"
                        className="registerbtn button"
                        value="Login"
                    />
                    <div className="container signin">
                        <p>Dont have an account?<Link to="/register">Sign up</Link>.</p>
                    </div>
                </div>
            </form>
        </section>
    )
}
