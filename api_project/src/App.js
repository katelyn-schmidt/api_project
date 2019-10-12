import React from 'react';
import Yoda from './yoda.png';
import Input from './Input.js';
import Background from './Background.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={Yoda} height="100px"/>
        <p>
          Talk like YOda
        </p>
        {/* <form>
         Input:
         <input type="text" name="firstname"></input>
         <br></br>
         <input type="submit" value="Submit"></input>
        </form> */}
        <Background/>
      </header>
    </div>
  );
}

export default App;
