import React from 'react';
import './User.css';
import NavBar from '../../components/User NavBar/NavBar';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase } from '@mui/material';

const User = () => {
  const styles = {
    background: '#fff',
    borderRadius: '20px',
    color: ' #000',
    padding: '12px 21px',
    fontSize: '17px',
    width: '100%',
  };

  const style1 = {
    background: '#fff',
    width: '60px',
    fontSsize: '23px',
    color: '#000',
  };
  return (
    <>
      <NavBar />
      <div className="bg-holder"></div>
      <div className="user-wrapper">
        <div className="user-hero-section">
          <div className="user-hero-heading">
            <p>
              The <span> Healing </span>Journey
            </p>
            Starts Here
          </div>
          <div className="user-hero-search">
            <InputBase
              sx={{ ml: 1, flex: 1, ...styles }}
              placeholder="Find Your Healer"
              inputProps={{ 'aria-label': 'Find Your Healer' }}
            />
            <IconButton
              type="button"
              sx={{ p: '10px', ...style1 }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
