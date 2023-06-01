import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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

function Header(){
  return (
    <header>
      <nav className='nav'>
        <img src={logo} className="App-logo" alt="logo"/>
        <ul className='nav-items'>
          <li><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>Pricing</a></li>
          <li><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>About</a></li>
          <li><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent(){
  return (
    <div className='content'>
      <h1>Why I love react</h1>
      <ol className='content-list'>
        <li>I need a job bruh</li>
        <li>daddy zucks company made it</li>
        <li>much faster and better than angular</li>
        <li>need it for my portfolio website</li>
      </ol>
    </div>
  )
}

function Footer(){
  return (
    <footer className='footer-page'>
      <p> &copy; 2023 Patel development. All rights reserved</p>
    </footer>
  )
}

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


