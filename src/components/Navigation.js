import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
const Navigation = () => {
  return (
    <nav className="main-nav">

      <Grid container spacing={3}>
        <Grid item xs={3}><Button component={NavLink} to="/mountain">Mountain</Button></Grid>
        <Grid item xs={3}><Button component={NavLink} to="/beach">Beaches</Button></Grid>
        <Grid item xs={3}><Button component={NavLink} to="/bird">Birds</Button></Grid>
        <Grid item xs={3}><Button component={NavLink} to="/food">Food</Button></Grid>
      </Grid>

    </nav>
  );
}

export default Navigation;
