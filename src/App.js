import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs, addBlog } from './redux/actions/blogs'; 


function App() {
  const initialState = { author : "" , text : "" };
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogsReducer?.blogsData?.b);
  console.log(blogs);

  useEffect(()=>{
    dispatch(getBlogs())
  },[formData])

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
    dispatch(addBlog(formData))
    .then(res=>{
      console.log(res);
    })
  }

  return(
      <div className="App">
        <div>
          <form onSubmit={handleSubmit}>
            <input 
             name="author"
             placeholder="Author Name"
             type="text"
             className=""
             onChange={(e)=>{
               setFormData({
                 ...formData,
                 [e.target.name] : e.target.value,
               })
             }}
             required 
             /><br/><br/>
             <textarea
             name="text"
             placeholder="Enter Blog Here"
             onChange={(e)=>{
              setFormData({
                ...formData,
                [e.target.name] : e.target.value,
              })
            }}
             required 
             /><br/><br/>
             <button type="submit">save</button>
          </form>
        </div>
        {blogs && blogs.length>0 ?
        blogs.map(b=>{
          return(
            <>
            <p>{b.text}</p>
            <p>{b.author}</p>
            </>
          )
        }): ''}
      </div>
  )
}
export default App;
