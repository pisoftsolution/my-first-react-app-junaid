import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs, addBlog, deleteBlog } from './redux/actions/blogs'; 
import Popup from './Popup';
import {Button} from 'react-bootstrap'


function App() {
  const [showBulkAdd, setShowBulkAdd] = useState(false);
  const initialState = { author : "" , text : "" };
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogsReducer?.blogsData?.b);
  console.log(blogs);

  const deleteHandler = (data) => {
    dispatch(deleteBlog({ id: data }));
  }

  useEffect(()=>{
    dispatch(getBlogs())
  },[formData, blogs])

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

             <button
              type="submit"
            >
               save</button>
          </form>
        </div>

        <table>
            <tr>
                <th>Author</th>
                <th >Text</th>
                <th >Actions </th>

            </tr>
        {blogs && blogs.length>0 ?
        blogs.map(b=>{
          return(
           <>
            <tr key={b._id}>
              <td>{b.author}</td>
              <td>{b.text}</td>
              <button
              className="btn1"
              onClick={togglePopup}
              >
                Edit
              </button>
                  {showBulkAdd ? (
                    <Popup text="Close Me" closePopup={togglePopup} />
                      ) : null}

              <button
                className="btn2"
                onClick={() => deleteHandler(b._id)}
                >
                  Delete
                </button>
            </tr>
            </>
          )
        }): ''}
        </table>
      </div>
  )
}

export default App;
