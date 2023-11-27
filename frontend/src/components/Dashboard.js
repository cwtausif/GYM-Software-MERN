// frontend/src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { CssBaseline, Container, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LeftNavBar from './LeftNavBar';
import TopBar from './TopBar';
import MainContent from './MainContent';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [leftNavBarOpen, setLeftNavBarOpen] = useState(true);
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

  const handleToggleLeftNavBar = () => {
    setLeftNavBarOpen(!leftNavBarOpen);
  };

  const handleLogout = () => {
    // Clear the access token from localStorage
    localStorage.removeItem('accessToken');
    // Navigate the user back to the login page
    navigate('/login');
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <Grid container>
          {leftNavBarOpen && (
            <Grid item xs={2}>
              <LeftNavBar />
            </Grid>
          )}
          <Grid item xs>
            <TopBar toggleLeftNavBar={handleToggleLeftNavBar} />
            {user ? (
              <MainContent user={user} handleLogout={handleLogout} />
            ) : (
              <Typography variant="body2" color="error">
                You are not authenticated. Redirecting to login...
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
