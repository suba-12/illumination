
import { Avatar, Box, Card, CardContent, FormControl, IconButton, InputLabel, List, ListItem, ListItemText, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import "../assests/setting.css";
import good from '../assests/morning.png'


const handleClick = () => {
  console.log('Home button clicked!');
};

const Setting = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <Box bgcolor="#f0fbee" color="black" flex={7} p={2}>
      <Box className="header">
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
        Settings
      </Typography>

      <div className='container'>
        <Card variant="outlined" className="cardinner" style={{ marginTop: '-10px', marginLeft:"30px",borderRadius:'10px'}}>
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
            My Profile
          </Typography>

          
          <Card variant="outlined" className="inner-card" style={{ borderRadius: "10px" }}>
            {/* Card content */}
            <Box display="flex" alignItems="center" marginBottom="10px" marginLeft="20px">
              <Avatar alt="Profile Picture" src="/path/to/profile.jpg" style={{ marginRight: '10px', width: '80px', height: '80px' }} />
              <Typography variant="h6" style={{  marginTop:"-20px"  }}>Sam Alexander</Typography>
              <Typography variant="body2" style={{ color: 'gray', marginTop:"20px" , marginLeft:"-130px" }}>
              <br />
             Puducherry, India
            </Typography>
            </Box>
      

          </Card>
          <Card variant="outlined" className="new-card" style={{ borderRadius: "10px" }}>
            <div>
            <Typography variant="h6" style={{  marginLeft :"20px" ,marginTop:"10px" }}>Personal Information</Typography>
            
            <Typography variant="body2" style={{ color: 'gray', marginTop:"-10px" , marginLeft:"18px" }}>
              <br />
             Username
             <br />
             <Typography color={"black"}>Sam Alexander</Typography>
            </Typography>

            <Typography variant="body2" style={{ color: 'gray', marginTop:"-70px" , marginLeft:"350px" }}>
              <br />
             Email Address
             <br />
             <Typography color={"black"}>samandreson23@gmail.com</Typography>
            </Typography>

              
            <Typography variant="body2" style={{ color: 'gray', marginTop:"1px" , marginLeft:"18px" }}>
              <br />
             Phone
             <br />
             <Typography color={"black"}>+91 9923903261</Typography>
            </Typography>

            <Typography variant="body2" style={{ color: 'gray', marginTop:"-70px" , marginLeft:"350px" }}>
              <br />
             Location
             <br />
             <Typography color={"black"}>Puducherry</Typography>
            </Typography>
            </div>
          </Card>

          <Typography variant="h6" className="profile-text" style={{ marginTop: '390px', marginLeft: '-600px' }}>
            Language
          </Typography>
          <FormControl variant="outlined" fullWidth style={{width: '250px', marginLeft: '-90px', marginTop: '430px',borderRadius: "10%"}}>
            
            <InputLabel id="language-select-label">Select Language</InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              label="Select Language"
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="fr">French</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              {/* Add more language options as needed */}
            </Select>
          </FormControl>
        </Card>
      </div>
    </Box>
  );
};

export default Setting;
