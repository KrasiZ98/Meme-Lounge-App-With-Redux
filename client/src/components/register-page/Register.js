import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { formUserError } from '../../redux/actions/auth-actions/dispatchActionsAuth';
import { registerUserApi } from '../../redux/actions/auth-actions/actionsAuth';


export const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formError = useSelector((state) => state.auth.formError);
    const serverError = useSelector((state) => state.auth.serverError);
    console.log(formError, serverError)

    const [registerForm, setRegisterForm] = useState({
        username: "",
        email: "",
        password: "",
        repeatPass: "",
        gender: "",
    });

    const handleChange = (e) => {
        setRegisterForm((oldValues) => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.values(registerForm).every((value) => value !== "")) {
            dispatch(registerUserApi(registerForm, navigate));
        } else {
            const errorForm = "Please write the empty fields.";
            dispatch(formUserError(errorForm));
            setTimeout(() => {
                dispatch(formUserError(null));
            }, 4000);
        }
    }
    return (
        <section id="register">
            <form id="register-form" onSubmit={handleSubmit}>
            {formError && <h2 style={{ color: "red" }}>{formError}</h2>}
            {serverError && <h2 style={{ color: "red" }}>{serverError}</h2>}
                <div className="container">
                    <h1>Register</h1>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        onChange={handleChange}
                        value={registerForm.username}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        onChange={handleChange}
                        value={registerForm.email}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        onChange={handleChange}
                        value={registerForm.password}
                    />
                    <label htmlFor="repeatPass">Repeat Password</label>
                    <input
                        id="repeatPass"
                        type="password"
                        placeholder="Repeat Password"
                        name="repeatPass"
                        onChange={handleChange}
                        value={registerForm.repeatPass}
                    />
                    <div className="gender">
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            checked={registerForm.gender === "female"}
                            onChange={handleChange}
                        />
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male" 
                            checked={registerForm.gender === "male"}
                            onChange={handleChange}
                        />
                        <label htmlFor="male">Male</label>
                    </div>
                    <input
                        type="submit"
                        className="registerbtn button"
                        value="Register"
                    />
                    <div className="container signin">
                        <p>Already have an account?<Link to="/login">Sign in</Link>.</p>
                    </div>
                </div>
            </form>
        </section>
    )
}
