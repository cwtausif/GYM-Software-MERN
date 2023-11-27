// frontend/src/components/MainContent.js
import React from 'react';
import { Typography, Button } from '@mui/material';

const MainContent = ({ user, handleLogout }) => {
  return (
    <div style={{ padding: '20px', flexGrow: 1 }}>
      <Typography variant="h5">Welcome, {user.name}!</Typography>
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleLogout}
        style={{ marginTop: '20px' }}
      >
        Logout
      </Button>
    </div>
  );
};

export default MainContent;
