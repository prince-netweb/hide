import './App.css';
import { useState } from "react"
import Forloop from './loop/Forloop';
import Forin from './loop/Forin';
import Forof from './loop/Forof';
import Foreach from './loop/Foreach';

function App() {
  const [toggle, settoggle] = useState(false)


  let activeclass = toggle ? "active" : "btn ";
  return (
    <div className="App">
      <button className={activeclass} onClick={() => settoggle(true)}>Form</button>
      <button className="btn-close" onClick={() => settoggle(false)}>Close</button>
      {
        toggle ?


          <div className='form_handle'>
            <h2>Sigin up</h2>
            <label>Username</label>
            <input type="text " placeholder=' Enter the username'></input>
            <label>Password</label>
            <input type="password " placeholder=' Enter the password'></input>

            <button className='submit_btn'>Submit</button>

          </div> : ""


      }
      <Forloop />
      <Forin />
      <Forof />
      <Foreach />

    </div>
  );
}

export default App;
