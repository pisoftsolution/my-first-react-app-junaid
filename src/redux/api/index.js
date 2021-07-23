import axios from "axios";

export const url = "http://localhost:8050/api";

export const getBlogs = () =>{
    return axios.get(`${url}/blog`)
};
export const addBlog = (formData) =>{
    return axios.post(`${url}/blog/add`, formData)
};