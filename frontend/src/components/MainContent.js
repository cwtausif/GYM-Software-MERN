// frontend/src/components/Dashboard.js
import React from 'react';
import { Container, Grid } from '@mui/material';
import TopBar from './TopBar';
import LeftNavBar from './LeftNavBar';
import MainContent from './MainContent';

const Dashboard = () => {
  return (
    <>
      <TopBar />
      <Container component="main" maxWidth="xl">
        <Grid container>
          <Grid item xs={2}>
            <LeftNavBar />
          </Grid>
          <Grid item xs={10}>
            <MainContent />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
