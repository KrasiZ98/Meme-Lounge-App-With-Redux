import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export const Navigation = () => {
    const auth = useSelector((state) => state.auth.user);


    return (
        <nav>
            <Link to="/catalog">All Memes</Link>
            {/* <!-- Logged users --> */}
            {auth.accessToken ?
                <div className="user">
                    <Link to="/create">Create Meme</Link>
                    <div className="profile">
                        <span>Welcome, </span>
                        <Link to="/profile">My Profile</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                </div>
                :
                <div className="guest">
                    <div className="profile">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                    <Link className="active" to="/">Home Page</Link>
                </div>
            }
            {/* <!-- Guest users --> */}

        </nav>

    )
}
