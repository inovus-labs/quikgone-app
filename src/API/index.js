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

export const getitem = async () => {

    let items = [
        {
            id: "1",
            name: "Padavalam",
            prize: "40",
            discount:"20",
            expdate:"23/04/2024",
            delvdate:"22 March"
        },
        {
            id: "2",
            name: "Pavakka",
            prize: "25",
            discount:"10",
            expdate:"23/04/2024",
            delvdate:"22 March"
        },
        {
            id: "3",
            name: "Kovakaa",
            prize: "20",
            discount:"5",
            expdate:"23/04/2024",
            delvdate:"22 March"
        },
    ]

    return items;

}

