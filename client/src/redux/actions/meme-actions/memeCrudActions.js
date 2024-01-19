export const getAllMemes = async () => {
    try {
        const response = await fetch("http://localhost:3030/jsonstore/meme");

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();

    } catch (error) {
        console.error("GET ALL MEME ERROR:", error.message);
        return error.message;
    }
};

export const getMemeById = async (memeId) => {
    try {
        const response = await fetch("http://localhost:3030/jsonstore/meme/" + memeId);

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();

    } catch (error) {
        console.error("GET MEME BY ID ERROR:", error.message);
        return error.message;
    }
};


export const createMeme = async (meme) => {
    try {
        const response = await fetch("http://localhost:3030/jsonstore/meme", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(meme)
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();

    } catch (error) {
        console.error("CREATE MEME ERROR:", error.message);
        return error.message;
    }

};

export const updateMeme = async (memeId, meme) => {
    try {
        const response = await fetch("http://localhost:3030/jsonstore/meme/" + memeId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(meme)
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();

    } catch (error) {
        console.error("UPDATE MEME ERROR:", error.message);
        return error.message;
    }
};

export const deleteMeme = async (memeId) => {
    try {
        const response = await fetch("http://localhost:3030/jsonstore/meme/" + memeId, {
            method: "DELETE",
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();

    } catch (error) {
        console.error("DELETE MEME ERROR:", error.message);
        return error.message;
    }
};