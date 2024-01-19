import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMemesApi } from '../../redux/actions/meme-actions/memeActions';
import { Card } from './Card';

export const Catalog = () => {
    const memesObject = useSelector((state) => state.meme.data);
    const errorServer = useSelector((state) => state.meme.errorServer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch((getAllMemesApi()));
    }, [dispatch]);

    const memeIds = Object.keys(memesObject);
    const memes = typeof memesObject !== "string" ? Object.values(memesObject) : [];

    if (errorServer) {
        return <h1>{errorServer}</h1>
    }

 
    console.log(memes);
    

    return (
        <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                {/* <!-- Display : All memes in database ( If any ) --> */}
                { memes.length > 0 ?
                    memes.map((meme) => <Card key={meme._id} meme={meme} />)
                    : <p className="no-memes">No memes in database.</p>}

                {/* <!-- Display : If there are no memes in database --> */}
            </div>
        </section>
    )
}
