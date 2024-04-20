import axios from 'axios';

export const userLogin = async (user) => {

    try {
        const res = await axios.post(`${import.meta.env.VITE_APP_QUIKGONE_API_BASE_URL}/auth/login`, user);
        return res.data;
    } catch (error) {
        console.log(error);
        console.log(error.response.status);
        return error;   
    }

};

export const userRegister = async (user) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_APP_QUIKGONE_API_BASE_URL}/auth/login`, user);
        return res.data;
    } catch (error) {
        console.log(error);
        console.log(error.response.status);
        return error;   
    }

}