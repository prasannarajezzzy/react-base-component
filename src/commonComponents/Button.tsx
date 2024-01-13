// Button.tsx
import React from 'react';
import "../theme.css";

interface ButtonProps {
  type: 'link' | 'submit' | 'icon' | 'iconText';
  link?: string; // Make link optional since not all types require it
  text?: string;
  icon?: string;
  onClick?: () => void; // Define the onClick prop if needed
}

const Button: React.FC<ButtonProps> = ({ type, link, text, icon, onClick }) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: type === 'link' ? 'transparent' : 'var(--button-color)',
    color: type === 'link' ? 'var(--primary-color)' : 'white',
    border: `1px solid ${type === 'link' ? 'transparent' : 'var(--border-color)'}`,
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <button style={buttonStyle} type={type === 'submit' ? 'submit' : 'button'} onClick={onClick}>
      {icon && <span style={{ marginRight: '5px' }}>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
