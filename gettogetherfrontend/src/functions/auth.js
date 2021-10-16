import axios from "axios";

export const createUser = async (name, email, password, terms) => {
    return await axios.post(`http://localhost:8000/api/user/create-user`, {name, email, password, terms}, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}