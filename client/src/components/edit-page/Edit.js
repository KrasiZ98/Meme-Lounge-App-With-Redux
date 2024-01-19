import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getElementByIdApi, updateMemeApi } from '../../redux/actions/meme-actions/memeActions';
import { formErorMeme } from '../../redux/actions/meme-actions/dispatchActonsMeme';

export const Edit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const singleMeme = useSelector((state) => state.meme.singleMeme);
    const auth = useSelector((state) => state.auth.user);
    // const memesObject = useSelector((state) => state.meme.data);
    // const memesArray = Object.values(memesObject);
    // const currentMeme = memesArray.find((meme) => meme._id === id);

    const [formValue, setFormValue] = useState({
        title: singleMeme?.title || '',
        description: singleMeme?.description || "",
        imageUrl: singleMeme?.imageUrl || "",
        _id: singleMeme._id,
        _ownerId: auth._id,
    });


    const handleChange = (e) => {
        setFormValue((oldValues) => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.values(formValue).every((value) => value !== "")) {
            dispatch(updateMemeApi(id, formValue, navigate));

        } else {
            const errorForm = "Please write the empty filds.";
            dispatch(formErorMeme(errorForm));
            setTimeout(() => {
                dispatch(formErorMeme(null));
            }, 3000)
        }
    }

    return (
        <section id="edit-meme">
            <form id="edit-form" onSubmit={handleSubmit}>
                <h1>Edit Meme</h1>
                <div className="container">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter Title"
                        name="title"
                        onChange={handleChange}
                        value={formValue.title}
                    />
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        placeholder="Enter Description"
                        name="description"
                        onChange={handleChange}
                        value={formValue.description}
                    >

                    </textarea>
                    <label htmlFor="imageUrl">Image Url</label>
                    <input
                        id="imageUrl"
                        type="text"
                        placeholder="Enter Meme ImageUrl"
                        name="imageUrl"
                        onChange={handleChange}
                        value={formValue.imageUrl}
                    />
                    <input
                        type="submit"
                        className="registerbtn button"
                        value="Edit Meme"
                    />
                </div>
            </form>
        </section>
    )
}
