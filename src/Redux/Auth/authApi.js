import axios from "axios";

export const registerApi = async (data) =>{
    const response = await axios.post("https://reqres.in/api/register",data);
    return response.data;
}


export const loginApi = async (data) =>{
    const response = await axios.post("https://reqres.in/api/login",data);
    return response.data;
}


