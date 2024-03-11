
import { Avatar, Box, Card, CardContent, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import "../assests/setting.css";
import good from '../assests/morning.png'


const handleClick = () => {
  console.log('Home button clicked!');
};

const Setting = () => {


  return (
    <Box bgcolor="#f0fbee" color="black" flex={7} p={2}>
      <Box className="header" >
        <Typography variant="h5" color={'gray'} className="good-morning">
          Good morning
          <img src={good} alt="Avatar" style={{ marginLeft: "10px" }}></img>

        </Typography>

        <Typography variant="body1" className="home-button" onClick={handleClick}>
          Home 1
        </Typography>

        <IconButton color="primary" aria-label="notifications" className="notification-icon">
          <NotificationsOutlinedIcon />
        </IconButton>

        <Avatar alt="Profile" src="/path/to/profile.jpg" className="notification-icon" />
      </Box>
      <Typography variant="h5" color={'black'} margin={'40px'} className="setingid">
        Devices
      </Typography>

      <div className='container'>
        <Card variant="outlined" className="cardinner" style={{ marginTop: '-10px', marginLeft: "30px", borderRadius: '10px' }}>
          <CardContent className="sidebar1">
            <List component="nav" style={{color:"green"}}>
              <ListItem button>
                <ListItemText primary="My Profile" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Device Configuration" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Login Activity" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Support" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Theme" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="About" />
              </ListItem>
            </List>
          </CardContent>
          <Typography variant="h6" className="profile-text" style={{ marginTop: '15px', marginLeft: '50px' }}>
            Device Configuration
          </Typography>
          <div>
            <Card style={{ width: '630px', height: '480px', backgroundColor: '#ebf9e7', marginTop: "80px", marginLeft: '-190px', borderRadius: '20px' }}>

              <Card className="smallcard-dev" style={{ borderRadius: '15px' }}>
                <div class='icons'>
                  <AddOutlinedIcon style={{ fontSize: '4em', marginLeft: "9px" }} />
                </div>
                <Typography style={{ color: 'gray', fontSize: '12px', marginLeft: '25px', marginTop: '-5px' }}>Add Device</Typography>
                <div>
                </div>
              </Card>
              <Card className="smallcard1-dev" style={{ borderRadius: '15px' }}>
                <div>
                  <Avatar style={{ marginTop: '25px', marginLeft: '30px', width: '50px', height: '50px' }}></Avatar>
                  <Typography style={{ color: 'gray', fontSize: '10px', marginLeft: '28px', marginTop: '8px' }}>LightXPM312</Typography>
                </div>
              </Card>
              <Card className="smallcard2-dev" style={{ borderRadius: '15px' }}>
                <div>
                  <Avatar style={{ marginTop: '25px', marginLeft: '30px', width: '50px', height: '50px' }}></Avatar>
                  <Typography style={{ color: 'gray', fontSize: '10px', marginLeft: '28px', marginTop: '8px' }}>LightXPM312</Typography>
                </div>
              </Card>
              <Card className="smallcard3-dev" style={{ borderRadius: '15px' }}>
                <div>
                  <Avatar style={{ marginTop: '25px', marginLeft: '30px', width: '50px', height: '50px' }}></Avatar>
                  <Typography style={{ color: 'gray', fontSize: '10px', marginLeft: '28px', marginTop: '8px' }}>LightXPM312</Typography>
                </div>
              </Card>

              <Card className="smallcard-dev" style={{ borderRadius: '15px' }}>
                <Avatar style={{ marginTop: '25px', marginLeft: '30px', width: '50px', height: '50px' }}></Avatar>
                <Typography style={{ color: 'gray', fontSize: '10px', marginLeft: '28px', marginTop: '8px' }}>LightXPM312</Typography>
                <div>
                </div>
              </Card>
              <Card className="smallcard1-dev" style={{ borderRadius: '15px' }}>
                <div>
                  <Avatar style={{ marginTop: '25px', marginLeft: '30px', width: '50px', height: '50px' }}></Avatar>
                  <Typography style={{ color: 'gray', fontSize: '10px', marginLeft: '28px', marginTop: '8px' }}>LightXPM312</Typography>
                </div>
              </Card>
              <Card className="smallcard2-dev" style={{ borderRadius: '15px' }}>
                <div>
                  <Avatar style={{ marginTop: '25px', marginLeft: '30px', width: '50px', height: '50px' }}></Avatar>
                  <Typography style={{ color: 'gray', fontSize: '10px', marginLeft: '28px', marginTop: '8px' }}>LightXPM312</Typography>
                </div>
              </Card>
              <Card className="smallcard3-dev" style={{ borderRadius: '15px' }}>
                <div>
                  <Avatar style={{ marginTop: '25px', marginLeft: '30px', width: '50px', height: '50px' }}></Avatar>
                  <Typography style={{ color: 'gray', fontSize: '10px', marginLeft: '28px', marginTop: '8px' }}>LightXPM312</Typography>
                </div>
              </Card>


              <Card className="smallcard-dev" style={{ borderRadius: '15px' }}>
                <Avatar style={{ marginTop: '25px', marginLeft: '30px', width: '50px', height: '50px' }}></Avatar>
                <Typography style={{ color: 'gray', fontSize: '10px', marginLeft: '28px', marginTop: '8px' }}>LightXPM312</Typography>
                <div>
                </div>
              </Card>
              <Card className="smallcard1-dev" style={{ borderRadius: '15px' }}>
                <div>
                  <Avatar style={{ marginTop: '25px', marginLeft: '30px', width: '50px', height: '50px' }}></Avatar>
                  <Typography style={{ color: 'gray', fontSize: '10px', marginLeft: '28px', marginTop: '8px' }}>LightXPM312</Typography>
                </div>
              </Card>
              <Card className="smallcard2-dev" style={{ borderRadius: '15px' }}>
                <div>
                  <Avatar style={{ marginTop: '25px', marginLeft: '30px', width: '50px', height: '50px' }}></Avatar>
                  <Typography style={{ color: 'gray', fontSize: '10px', marginLeft: '28px', marginTop: '8px' }}>LightXPM312</Typography>
                </div>
              </Card>
              <Card className="smallcard3-dev" style={{ borderRadius: '15px' }}>
                <div>
                  <Avatar style={{ marginTop: '25px', marginLeft: '30px', width: '50px', height: '50px' }}></Avatar>
                  <Typography style={{ color: 'gray', fontSize: '10px', marginLeft: '28px', marginTop: '8px' }}>LightXPM312</Typography>
                </div>
              </Card>


            </Card>




          </div>
        </Card>
      </div>
    </Box>
  );
};

export default Setting;
