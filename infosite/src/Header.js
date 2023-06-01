import React from 'react';
import logo from './images/react-icon-small.png';

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

  export default Header;