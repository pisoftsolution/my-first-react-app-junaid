import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs, addBlog, deleteBlog } from './redux/actions/blogs'; 
import Popup from './Popup';
import {Table, Button, FormGroup, FormLabel, Form } from 'react-bootstrap'
import Modal from 'react-modal';


function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
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
          {/* <Button onClick={togglePopup} className="btnuser" style={{backgroundColor:"green"}}>Add User</Button><br/><br/>
          {showBulkAdd ? (
          <Popup text="Close Me" closePopup={togglePopup} />
        ) : null} */}
        <Table striped bordered hover width="50%">
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
              <Button onClick={()=> setModalIsOpen(true)} className="btn1">Edit</Button>
              <Modal isOpen={modalIsOpen} width="60%">
              <Form>
                <h1>Edit User</h1>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Author Name</Form.Label>
                    <Form.Control type="text" placeholder="enter author name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Text</Form.Label>
                    <Form.Control as="textarea" placeholder="enter text here" rows={3} />
                  </Form.Group>
              </Form>
                  <div>
                    <div>
                    <Button className="btn9">ADD</Button>
                    </div>
                    <Button className="btn8" onClick={() => setModalIsOpen(false)} style={{background:"red", testDecoration: "none"}}>Cancel</Button>
                  </div>
              </Modal>
              {/* <Button
              className="btn1"
              onClick={togglePopup}
              >
                Edit
              </Button>
                  {showBulkAdd ? (
                    <Popup text="Close Me" closePopup={togglePopup} />
                      ) : null} */}

              <Button
                className="btn2"
                onClick={() => deleteHandler(b._id)}
                >
                  Delete
                </Button>
            </tr>
           
            </>
          )
        }): ''}
        </Table>
      </div>
  )
}

export default App;
