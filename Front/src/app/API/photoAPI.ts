import Axios from 'axios';

const BASE_URL = "http://localhost:25152/api/images";

export const getAll = () => {
    return Axios.get(BASE_URL);
}

export const deleteByName = (imageName) => {
    return Axios.delete(`${BASE_URL}?imageName=${imageName}`);
}

export const downloadByName = (imageName) => {
    console.log(imageName);
    return Axios.get(`${BASE_URL}?imageName=${imageName}`);
}

export const add = (photo) => {
    return Axios.post(BASE_URL, photo);
}
