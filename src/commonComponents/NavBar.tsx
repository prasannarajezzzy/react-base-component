// NavBar.tsx
import React from 'react';
import "../theme.css";

const NavBar: React.FC = () => {
  const navStyle: React.CSSProperties = {
    backgroundColor: 'var(--primary-color)',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navLinksStyle: React.CSSProperties = {
    listStyleType: 'none',
    display: 'flex',
  };

  const navLinkStyle: React.CSSProperties = {
    color: 'var(--button-color)',
    margin: '0 15px',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <div>
        <h1 style={{ margin: 0 }}>Your Logo</h1>
      </div>
      <ul style={navLinksStyle}>
        <li><a href="#" style={navLinkStyle}>Home</a></li>
        <li><a href="#" style={navLinkStyle}>About</a></li>
        <li><a href="#" style={navLinkStyle}>Services</a></li>
        <li><a href="#" style={navLinkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
