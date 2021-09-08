import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Menu } from '@material-ui/icons'; 

export default function ButtonAppBar() {

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">
            Chipchex Marketplace
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
