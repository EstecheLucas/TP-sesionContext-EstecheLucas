export const login = async (username, password) => {
    try {
        const response = await fetch("http://localhost:3000/api/auth/Login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();

        if (response.ok) {

            return data;
        } else {

            return null;
        }
    } catch (error) {

        return null;
    }
};
