import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export const Home = () => {
    const auth = useSelector((state) => state.auth.user);

    const success = useSelector((state) => state.auth.success)

    console.log(success);
    return (
        <section id="welcome">
            {success && <h2 style={{ color: "green" }}>{success} With {auth.email}</h2>}
            <div id="welcome-container">
                <h1>Welcome To Meme Lounge</h1>
                <img src="/images/welcome-meme.jpg" alt="meme" />
                {auth.accessToken === undefined &&
                    <>
                        <h2>Login to see our memes right away!</h2>
                        <div id="button-div">
                            <Link to="/login" className="button">Login</Link>
                            <Link to="/register" className="button">Register</Link>
                        </div>
                    </>
                }
            </div>
        </section>
    )
}
