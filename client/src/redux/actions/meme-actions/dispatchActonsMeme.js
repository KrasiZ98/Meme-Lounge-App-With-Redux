import { FETCH_ALL_MEMES, FETCH_MEMES_ERROR, FETCH_MEME_BY_ID, FETCH_MEME_CREATE, FETCH_MEME_DELETE, FETCH_MEME_UPDATE, FORM_ERROR_MEMES } from "./actionsTypes";

export const fetchAllMemes = (memes) => ({
    type: FETCH_ALL_MEMES,
    payload: memes,
});


export const fetchMemeByID = (meme) => ({
    type: FETCH_MEME_BY_ID,
    payload: meme,
});


export const fetchMemeCreate = (meme) => ({
    type: FETCH_MEME_CREATE,
    payload: meme,
});


export const fetchMemeUpdate = (memeId, meme) => ({
    type: FETCH_MEME_UPDATE,
    payload: { id: memeId, meme: meme },
});

export const fetchMemeDelete = (memeId) => ({
    type: FETCH_MEME_DELETE,
    payload: memeId,
  
});


export const fetchMemeError = (error) => ({
    type: FETCH_MEMES_ERROR,
    payload: error,
});

export const formErorMeme = (error) => ({
    type: FORM_ERROR_MEMES,
    payload: error,
})