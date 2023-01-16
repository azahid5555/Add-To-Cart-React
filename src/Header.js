import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
 
function Header() {
  return (
    <div>
        <AppBar style={{position:'static'}}>
        <Toolbar style={{color:'red',justifyContent:'space-around' ,width:'50%'}}>
           <Typography>Home</Typography>
          <Typography>About</Typography>
          <Typography>Contact Us</Typography>
          <Typography>Services</Typography>
          <Typography>Events</Typography>
          

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header