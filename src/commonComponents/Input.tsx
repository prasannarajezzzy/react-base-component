// Input.tsx
import React, { ChangeEvent } from 'react';
import "../theme.css";

interface InputProps {
  type: 'text' | 'password' | 'number' | 'email';
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, onChange, value }) => {
  const inputStyle: React.CSSProperties = {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--button-color)',
    border: `1px solid var(--border-color)`,
    padding: '10px',
    borderRadius: '5px',
    margin: '5px',
  };

  const getInputType = () => {
    switch (type) {
      case 'text':
        return <input type="text" style={inputStyle} placeholder={placeholder} onChange={onChange} value={value} />;
      case 'password':
        return <input type="password" style={inputStyle} placeholder={placeholder} onChange={onChange} value={value} />;
      case 'number':
        return <input type="number" style={inputStyle} placeholder={placeholder} onChange={onChange} value={value} />;
      case 'email':
        return <input type="email" style={inputStyle} placeholder={placeholder} onChange={onChange} value={value} />;
      default:
        return null;
    }
  };

  return <div>{getInputType()}</div>;
};

export default Input;
