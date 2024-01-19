import { FETCH_ALL_MEMES, FETCH_MEMES_ERROR, FETCH_MEME_BY_ID, FETCH_MEME_CREATE, FETCH_MEME_DELETE, FETCH_MEME_UPDATE, FORM_ERROR_MEMES } from "../actions/meme-actions/actionsTypes";

const initialState = {
    data: {},
    serverError: null,
    formError: null,
    singleMeme: null,
};

const memeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_MEMES:
            return {
                ...state, data: action.payload, serverError: null, formError: null, singleMeme: null
            };
        case FETCH_MEME_CREATE:
            const memesArrayCreate = Object.values(state.data);
            const stateAfterCreate = [...memesArrayCreate, action.payload];
            console.log(stateAfterCreate);
            return {
                ...state,
                data: stateAfterCreate,
                serverError: null, formError: null, singleMeme: null
            };
        case FETCH_MEME_UPDATE:
            const memeId = action.payload.id;
            const updatedMeme = action.payload.meme;
            const memesArray = Object.values(state.data);
            const stateAfterUpdate = memesArray.map((meme) =>
                meme._id === memeId ? updatedMeme : meme);

            console.log(stateAfterUpdate);
            return {
                ...state,
                data: stateAfterUpdate,
                serverError: null,
                formError: null,
                singleMeme: updatedMeme,
            };

        case FETCH_MEME_DELETE:
            const memesArrayDelete = Object.values(state.data);
            const deletedMeme = memesArrayDelete.filter((meme) => meme._id !== action.payload);
            return {
                ...state,
                data: deletedMeme,
                serverError: null, formError: null, singleMeme: null,
            }
        case FETCH_MEME_BY_ID:
            return {
                ...state, singleMeme: action.payload, serverError: null, formError: null,
            };
        case FETCH_MEMES_ERROR:
            return {
                ...state, singleMeme: null, serverError: action.payload, formError: null,
            }
        case FORM_ERROR_MEMES:
            return {
                ...state, formError: action.payload, serverError: null, singleMeme: null,
            }
        default:
            return state
    };
};

export default memeReducer;