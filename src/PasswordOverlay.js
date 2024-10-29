import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { Typography } from '@mui/material';

const PasswordOverlay = ({ onCorrectPassword }) => {
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(true); //da li je taj sloj vidljiv, true znaci da se vidi

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const correctPassword = atob('aXZhbmE='); //enkodovanje i poredi se sifra

    if (password === correctPassword) {
      setIsVisible(false); //sloj se vise ne vidi
      onCorrectPassword(); //iz index.js
    } else {
      alert('Wrong password!');
    }
  };

  return isVisible ? ( //dokle god je ovo true-ovo se prikazuje
    <div style={{ position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 9999,
        backgroundColor: '#fddda2',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
        <Typography sx={{color:"black", display:"block"}}>Zadatak 3</Typography>
        <LockIcon  sx={{color:"black", marginRight:"10px"}}/>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", fontSize: "16px", borderRadius: "5px" }}
        />
        <button style={{ padding: "10px", fontSize: "16px", borderRadius: "5px" }} type="submit">Log in</button>
      </form>
    </div>
  ) : null;
};

export default PasswordOverlay;