import React from 'react';
import './App.css';

function App() {

  return(
      <div className="App">
          <div className="col-3 container-login bg-white">
            <img src="https://pisoftsolution.com/media/04062021183428-logo_-_Copy-removebg-preview1.png" className="pisoft-logo"></img>
            <div>
              <input type="text" placeholder="Email Address" className="input-box">
              </input>

              <input type="text" placeholder="Password" className="input-box">
                </input><br/>

              <input id="remember" name="remember" type="checkbox"></input>
              <label>Remember me</label><br/>

               <button className="button"> Login</button>

               <a href="https://pisoftsolution.com/password/reset" className="reset">Forget your password?</a>
              <a href="https://pisoftsolution.com/register" className="reset">Signup for an account</a>

            </div>
          </div>
      </div>
  )
}
export default App;
