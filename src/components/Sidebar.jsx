

import React from 'react';

import { Box,
         List,
          ListItem, 
          ListItemButton, 
          ListItemIcon, 
          ListItemText, 
          Typography } from '@mui/material';

import "../assests/Style.css";
import { Link } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import img from '../assests/images.jpeg'

const Sidebar = () => {
  return (
    <Box
      bgcolor="white"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" }, position: "sticky" }}>
    
      <div position="fixed" id='side' className="sidebar-container">

        <div className="logo-container">
        <img src={img} alt="Logo" className="sidebar-logo" />
          <Typography id='col' variant="h6" className="heading">
            Bems
          </Typography>
        </div>
        <div className="sidebar-line"></div>

           {/* -------------- Menu ------------------------*/}

           <div >
           <Typography id='menu' variant="h6" >
            Menu
          </Typography>

          <List>
            <ListItem disablePadding className='dashboard-item'>
            <Link id='links' to = '/'>

              <ListItemButton Component="a" >
                <ListItemIcon >
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding className='dashboard-item'>
            <Link id='links' to = '/device'>
              <ListItemButton Component="a">
                <ListItemIcon >
                  <GridViewOutlinedIcon  />
                </ListItemIcon>
                <ListItemText primary="Device" />
              </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding className='dashboard-item'>
            <Link id='links' to = '/automation'>
              <ListItemButton Component="a" >
                <ListItemIcon >
                  <AutoStoriesOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Automation" />
              </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </div>
        <div className="sidebar-line"></div> 

           {/* ------------------------- Action ------------------------------*/}

           <div >
           <Typography id='menu' variant="h6" >
            Actions
          </Typography>

          <List>
            <ListItem disablePadding className='dashboard-item'>
            <Link id='links' to = '/setting'>

              <ListItemButton Component="a"  >
                <ListItemIcon >
                  <SettingsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding className='dashboard-item'>
              <ListItemButton Component="a" href="#logout">
                <ListItemIcon >
                  <LogoutOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <div className="sidebar-line"></div> 

 {/* ------------------------- Actions ------------------------------*/}

 <div >
           <Typography id='menu' variant="h6" >
            Actions
          </Typography>

          <List>
            <ListItem disablePadding className='dashboard-item'>
              <ListItemButton Component="a" href="#support" >
                <ListItemIcon >
                  <SettingsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Support" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding className='dashboard-item'>
              <ListItemButton Component="a" href="#about">
                <ListItemIcon >
                  <LogoutOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>

      
        
      </div>
    </Box>
  );
};

export default Sidebar;
