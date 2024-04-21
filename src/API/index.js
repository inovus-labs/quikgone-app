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




export const GetCart = async (user) => {
    try {
      const cookies = document.cookie.split(';');
      const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
      if (!tokenCookie) {
        throw new Error('No token found in cookie');
      }
      const token = tokenCookie.split('=')[1];
  
      const response = await axios.get(`${import.meta.env.VITE_APP_QUIKGONE_API_BASE_URL}/api/v1/cart`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
  
      console.log(response.data); // Log the response data
      return response.data; // Return the response data
    } catch (error) {
      console.error(error); // Log the full error object
      throw error; // Rethrow the error for better error handling
    }
  };



export const AddtoCart = async (user) => {
    try {
        const cookies = document.cookie.split(';');
        const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
        if (!tokenCookie) {
            throw new Error('No token found in cookie');
        }
        const token = tokenCookie.split('=')[1];

        const res = await axios.post(`${import.meta.env.VITE_APP_QUIKGONE_API_BASE_URL}/api/v1/cart`, user, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
};



export const GetDataByID = async (product_id) => {

    console.log(product_id);
    const res = await axios.get(`${import.meta.env.VITE_APP_QUIKGONE_API_BASE_URL}/api/v1/products/${product_id}`);
    console.log(res);
    return res

}

export const getitems = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_APP_QUIKGONE_API_BASE_URL}/api/v1/products`);
        // console.log(res);
        return res;
    } catch (error) {
        return error;   
    }

};
export const Cgqty = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_APP_QUIKGONE_API_BASE_URL}/api/v1/products`);
        // console.log(res);
        return res;
    } catch (error) {
        return error;   
    }

};

// Update Cart (PATCH)
// http://localhost:3000/api/v1/cart/bPe6DiRZqZRm0B5zKqPFp

// {
//   "qty": 5
// }