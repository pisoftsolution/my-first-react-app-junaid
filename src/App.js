import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs, addBlog } from './redux/actions/blogs'; 
import Popup from './Popup';


function App() {
  const [showBulkAdd, setShowBulkAdd] = useState(false);
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

  function togglePopup() {
    setShowBulkAdd(!showBulkAdd);
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
        {/* <button className="userBtn">Add User</button> */}
        <button  className="userBtn" onClick={togglePopup}>Add User</button>
                {showBulkAdd ? (
                  <Popup text="Close Me" closePopup={togglePopup} />
                ) : null}
        </div>
      
        {blogs && blogs.length>0 ?
        blogs.map(b=>{
          return(
           <>
            {/* <p>{b.text}</p>
            <p>{b.author}</p> */}
  
            </>
          )
        }): ''}

                  <table>
                    <tr>
                      <th>Author</th>
                      <th >Text</th>
                      <th >Actions </th>

                    </tr>
                    <tr>
                      <td>Junaid</td>
                      <td>This is Text</td>
                      <td>
                        <div>
                        <button className="btn1">Edit</button>
                        <button className="btn2">Delete</button>
                      </div>

                      </td>
                    </tr>
                  </table>
      </div>
  )
}
export default App;
