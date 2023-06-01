import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header.js"
import Footer from "./Footer.js"
import MainContent from "./MainContent.js"
import './index.css';

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

// function Factslist(){
//   return (
//     <ol>
//       <li>Was first released in 2013</li>
//       <li>Was Originally created by Jordan Walke</li>
//       <li>Has well over 100k stars on GitHub</li>
//       <li>Its maintained by facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ol>
//   );
// }

// function Componented(){
//   return (
//     <div>
//       <h1>Fun facts about react</h1>
//       <Factslist/>
//     </div>
//   )
// }


function WhyLoveReact(){
  return(
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

ReactDOM.render(<WhyLoveReact/>, document.getElementById("list"));

// ReactDOM.render(<Componented/>, document.getElementById("root"));


