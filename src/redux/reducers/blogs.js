import { GET_BLOGS, ADD_BLOG } from "../constants";

export default (state = {blogsData: null},action)=>{
    switch(action.type){
        case GET_BLOGS:
            console.log(action?.data);
            return {
                ...state,
                blogsData: action?.data
            }
            case ADD_BLOG:
                console.log(action?.data);
                return {
                    ...state,
                    blogsData: action?.data
                }
            default:
                return {
                    ...state
                }
    }
};