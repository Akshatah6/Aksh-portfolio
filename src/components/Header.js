import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Akshatha Hiremath</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
