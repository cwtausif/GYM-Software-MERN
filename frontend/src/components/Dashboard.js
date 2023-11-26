// frontend/src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LeftNavBar from './LeftNavBar';
import TopBar from './TopBar';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the access token exists in localStorage
    const accessToken = localStorage.getItem('accessToken');

    // If the token exists, you can fetch user data or perform other authenticated actions
    if (accessToken) {
      // For now, let's simulate fetching user data
      // Replace this with an actual API call to get user details
      const mockUserData = {
        _id: 'mockUserId',
        name: 'Demo User',
        email: 'demo@gymsoftware.com',
      };

      setUser(mockUserData);
    } else {
      // If not authenticated, navigate to the login page
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear the access token from localStorage
    localStorage.removeItem('accessToken');
    // Navigate the user back to the login page
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        {user ? (
          <>
            <TopBar />
            <LeftNavBar />
            <Typography variant="h5">Welcome, {user.name}!</Typography>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <Typography variant="body2" color="error">
            You are not authenticated. Redirecting to login...
          </Typography>
        )}
      </div>
    </Container>
  );
};

export default Dashboard;
