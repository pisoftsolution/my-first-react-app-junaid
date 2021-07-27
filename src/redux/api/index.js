import axios from "axios";

export const url = "http://localhost:8095/api";

export const getBlogs = () =>{
    return axios.get(`${url}/Blogs/blog`)
};
export const addBlog = (formData) =>{
    return axios.post(`${url}/Blogs/add`, formData)
};