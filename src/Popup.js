import React from 'react';
import './App.css';

function Popup({ closePopup }) {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>ADD USER</h1>
       <form>
           <label>Author</label>
           <input type="text" placeholder="Enter author name" /><br /><br />
           <label>Text</label>
           <input type="text" placeholder="Enter blog here"/>
       </form>
        <div>
         
          <button className="popupButtonClose" onClick={closePopup}>
            cancel
          </button>
          <button className="submit1">ADD</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;