import axios from 'axios';

const URL = 'http://localhost:8000';
export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (err) {
        console.log(err.message);
    }
}

// export default authenticateSignup

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (err) {
        console.log(err.message);
        return err.response;
    }
}