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
        const res = await axios.post(`${import.meta.env.VITE_APP_QUIKGONE_API_BASE_URL}/auth/register`, user);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        console.log(error.response.status);
        return error;   
    }

};



export const AddItem = async (user) => {
    try {
        const cookies = document.cookie.split(';');
        const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
        if (!tokenCookie) {
            throw new Error('No token found in cookie');
        }
        const token = tokenCookie.split('=')[1];

        const res = await axios.post(`${import.meta.env.VITE_APP_QUIKGONE_API_BASE_URL}/api/v1/products/create`, user, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(res.headers);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

// export const getitem = async () => {

//     let items = [
//         {
//             id: "1",
//             name: "Padavalam",
//             prize: "40",
//             discount:"20",
//             expdate:"23/04/2024",
//             delvdate:"22 March"
//         },
//         {
//             id: "2",
//             name: "Pavakka",
//             prize: "25",
//             discount:"10",
//             expdate:"23/04/2024",
//             delvdate:"22 March"
//         },
//         {
//             id: "3",
//             name: "Kovakaa",
//             prize: "20",
//             discount:"5",
//             expdate:"23/04/2024",
//             delvdate:"22 March"
//         },
//     ]

//     return items;

// }

export const getitems = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_APP_QUIKGONE_API_BASE_URL}/api/v1/products`);
        // console.log(res);
        return res;
    } catch (error) {
        return error;   
    }

};

