// import React from 'react'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

function Navbar(args) {
    return (
      <div>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor: "#000000"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textAlign: "center",fontSize: "33px",color: "#fff",fontWeight: "bold"}}>
            Revision-App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );


}

export default Navbar;


