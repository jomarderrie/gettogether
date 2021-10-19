import axios from "axios";

export const createUser = async (firstName, lastName,email, password, terms) => {
    return await axios.post(`http://localhost:8080/api/user/register`, {firstName,lastName, email, password, terms}, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}

export const loginWithEmail = async (email,password) =>{
    return await axios.post(`http://localhost:8080/api/user/login`, { email, password}, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}