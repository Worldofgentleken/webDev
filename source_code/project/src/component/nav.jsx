import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <img 
      src="/Users/kunheerhee/Desktop/webDev/source_code/project/public/logo192.png" 
      alt="logo" 
      style={{ cursor: 'pointer' }} 
      onClick={goToHome} 
    />
  );
}

export default Logo;
