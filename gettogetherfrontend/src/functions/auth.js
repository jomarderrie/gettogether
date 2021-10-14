import axios from "axios";

export const createUser = async (name,email,password,terms) =>{
    return await axios.post(`http://localhost:8000/api/create-user`,{name,email,password,terms})
}