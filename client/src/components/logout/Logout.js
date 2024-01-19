import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserError, fetchUserLogout } from '../../redux/actions/auth-actions/dispatchActionsAuth';
import { useNavigate } from 'react-router-dom';
import { persistor } from '../../redux/store/store';


export const Logout = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.user);
    const navigate = useNavigate();


    useEffect(() => {
        const handleLogout = async () => {
            try {
                const response = await fetch("http://localhost:3030/users/logout", {
                    method: "GET",
                    headers: {
                        "X-Authorization": auth.accessToken
                    }
                });

             await new Promise(resolve => setTimeout(resolve, 1000));

                if (response.ok === false) {
                    const error = await response.json();
                    throw new Error(error.message);
                }

                dispatch(fetchUserLogout());
                await persistor.purge();



            } catch (error) {
                console.error("Error user logout from Logout:", error.message);
            } finally {
                navigate('/');
            }
        }

        handleLogout();

    }, [dispatch, auth.accessToken, navigate, persistor]);


    if (auth.accessToken === undefined) {
        return <h1> Please wait...</h1>
    }
}
