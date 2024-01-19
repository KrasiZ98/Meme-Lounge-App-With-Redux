import {
    getAllMemes as fetchGetAllMemesApi,
    getMemeById as fetchGetMemeByIdApi,
    createMeme as fetchCreateMemeApi,
    updateMeme as fetchUpdateMemeApi,
    deleteMeme as fetchDeleteMemeApi,
}
    from "./memeCrudActions";

import {
    fetchAllMemes,
    fetchMemeByID,
    fetchMemeCreate,
    fetchMemeDelete,
    fetchMemeError,
    fetchMemeUpdate
}
    from "./dispatchActonsMeme";


export const getAllMemesApi = () => async (dispatch) => {
    try {
        const memes = await fetchGetAllMemesApi();
        dispatch(fetchAllMemes(memes));
    } catch (error) {
        dispatch(fetchMemeError(error.message));
    }
};

export const getElementByIdApi = (memeId) => async (dispatch) => {
    try {
        const meme = await fetchGetMemeByIdApi(memeId);
        dispatch(fetchMemeByID(meme));
    } catch (error) {
        dispatch(fetchMemeError(error.message));
    }
};

export const createMemeApi = (meme, navigate) => async (dispatch) => {
    try {
        console.log("Ceating meme...");
        const createdMeme = await fetchCreateMemeApi(meme);

        console.log("Dispatching fetchCreateMemeApi...");
        dispatch(fetchMemeCreate(createdMeme));

        console.log("Navigating to /catalog...");
        return navigate("/catalog");

    } catch (error) {
        console.error("Error in fetchCreateMemeApi:", error.message);
        dispatch(fetchMemeError(error.message));
    }
};

export const deleteMemeApi = (memeId, navigate, memeName) => async (dispatch) => {
    try {
        const choice = window.confirm(`Are you sure you want to delete the ${memeName}`);
        if (choice) {

            console.log("Deleting meme...");
            await fetchDeleteMemeApi(memeId);

            console.log("Dispatching fetchMemeDelete...");
            dispatch(fetchMemeDelete(memeId));

            console.log("Navigating to /catalog...");
            navigate("/catalog");

        } else {
            navigate(`/details/${memeId}`);
        }
    } catch (error) {
        console.error("Error in deleteMemeApi:", error.message);
        dispatch(fetchMemeError(error.message));
    }
};

export const updateMemeApi = (memeId, meme, navigate) => async (dispatch) => {
    try {

        console.log("Updating meme...");
        const result = await fetchUpdateMemeApi(memeId, meme);
        console.log(result);
        console.log("Dispatching fetchUpdateMemeApi...");
        dispatch(fetchMemeUpdate(memeId, meme));

        console.log("Navigating to /details/:memeId...");
        navigate(`/details/${memeId}`);

    } catch (error) {
        console.error("Error in updateMemeApi:", error.message);
        dispatch(fetchMemeError(error.message));
    }
}