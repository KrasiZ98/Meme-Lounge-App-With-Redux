export const loginUser = async (user) => {
    try {
        const response = await fetch("http://localhost:3030/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();

    } catch (error) {
        console.error("Error from loginUser:", error.message);
        return error.message;
    }
}


export const registerUser = async (user) => {
    try {
        const response = await fetch("http://localhost:3030/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();

    } catch (error) {
        console.error("Error from registerUser:", error.message);
        return error.message;
    }
}