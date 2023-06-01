import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './logo.svg';

// const page = (
//   <div>
//       <img src={logo} className="App-logo" alt="logo"/>
//       <h1>Fun facts about react</h1>
//       <ol>
//         <li>Was first released in 2013</li>
//         <li>Was Originally created by Jordan Walke</li>
//         <li>Has well over 100k stars on GitHub</li>
//         <li>Its maintained by facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ol>
//     </div>
// )

function Factslist(){
  return (
    <ol>
      <li>Was first released in 2013</li>
      <li>Was Originally created by Jordan Walke</li>
      <li>Has well over 100k stars on GitHub</li>
      <li>Its maintained by facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ol>
  );
}

function Componented(){
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" width="10%"/>
      <h1>Fun facts about react</h1>
      <Factslist/>
    </div>
  )
}

function WhyLoveReact(){
  return(
    <div>
      <h1>Why I love react</h1>
      <ol>
        <li>I need a job bruh</li>
        <li>daddy zucks company made it</li>
        <li>much faster and better than angular</li>
        <li>need it for my portfolio website</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<Componented/>, document.getElementById("root"));

ReactDOM.render(<WhyLoveReact/>, document.getElementById("list"));
