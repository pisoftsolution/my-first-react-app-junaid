import axios from "axios";

export const url = "http://localhost:8091/api";

export const getBlogs = () =>{
    return axios.get(`${url}/Blogs/blog`)
};
export const addBlog = (formData) =>{
    return axios.post(`${url}/Blogs/add`, formData)
};

export const editBlog = (data) =>{
    return axios.put(`${url}/Blogs/blog`, data)
};

export const deleteBlog = (data) =>{
    return axios.delete(`${url}/Blogs/blog?id=${data.id}`, data)
};