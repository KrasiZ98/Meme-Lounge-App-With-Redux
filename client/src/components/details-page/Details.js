import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteMemeApi, getElementByIdApi } from '../../redux/actions/meme-actions/memeActions';

export const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.user);
    const singleMeme = useSelector((state) => state.meme.singleMeme);
    const errorServer = useSelector((state) => state.meme.errorServer);



    useEffect(() => {
        dispatch(getElementByIdApi(id));
    }, [dispatch]);

    const isOwner = auth._id === singleMeme?._ownerId

    if (singleMeme === null || singleMeme === undefined) {
        return <h1>Loading...</h1>
    }

    if (errorServer !== undefined) {
        return <h1>{errorServer}...</h1>
    }



    return (
        <section id="meme-details">
            <h1>Meme Title: {singleMeme.title}

            </h1>
            <div className="meme-details">
                <div className="meme-img">
                    <img alt="meme-alt" src={singleMeme.imageUrl} />
                </div>
                <div className="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                        {singleMeme.description}
                    </p>

                    {/* <!-- Buttons Edit/Delete should be displayed only for creator of this meme  --> */}
                    {isOwner &&
                        <>
                            <Link className="button warning" to={`/edit/${singleMeme._id}`}>Edit</Link>
                            <button onClick={() => dispatch(deleteMemeApi(id, navigate, singleMeme.title))} className="button danger">Delete</button>
                        </>
                    }


                </div>
            </div>
        </section>
    )
}
