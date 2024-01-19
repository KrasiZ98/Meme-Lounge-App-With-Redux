import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createMemeApi } from '../../redux/actions/meme-actions/memeActions';
import { useNavigate } from 'react-router-dom';
import { formErorMeme } from '../../redux/actions/meme-actions/dispatchActonsMeme';

export const Create = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formError = useSelector((state) => state.meme.formError);
    const errorServer = useSelector((state) => state.meme.errorServer);
    const auth = useSelector((state) => state.auth.user);

    const [formValue, setFormValue] = useState({
        title: "",
        description: "",
        imageUrl: "",
        _ownerId: auth._id
    });

    const handleChange = (e) => {
        setFormValue(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.values(formValue).every((value) => value !== "")) {
            dispatch(createMemeApi(formValue, navigate));
            setFormValue({ title: "", description: "", imageUrl: "", });
        } else {
            const errorForm = "Please write the empty filds.";
            dispatch(formErorMeme(errorForm));
            setTimeout(() => {
                dispatch(formErorMeme(null));
            }, 3000)
        }
    }

    if (errorServer !== undefined) {
        return <h1>{errorServer}</h1>
    }

    return (
        <section id="create-meme">
            <form id="create-form" onSubmit={handleSubmit}>
                <div className="container">
                    {formError && <h2 style={{ color: "red" }}>{formError}</h2>}
                    <h1>Create Meme</h1>
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
                    ></textarea>
                    <label htmlFor="imageUrl">Meme Image</label>
                    <input
                        id="imageUrl"
                        type="text"
                        placeholder="Enter meme ImageUrl"
                        name="imageUrl"
                        onChange={handleChange}
                        value={formValue.imageUrl}
                    />
                    <input
                        type="submit"
                        className="registerbtn button"
                        value="Create Meme"
                    />
                </div>
            </form>
        </section>
    )
}
