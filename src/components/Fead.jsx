import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Grid,
  Card,
  Button,
  Toolbar
} from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DialpadIcon from '@mui/icons-material/Dialpad';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import { Switch } from '@mui/material';
import temp from '../assests/temp.png'
import hum from '../assests/humid.png'
import good from '../assests/morning.png'
import lights from '../assests/light.png'
import "../assests/Style.css";
import { Label } from '@mui/icons-material';


const handleClick = () => {
  console.log('Home button clicked!');
};


const Fead = () => {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!checked);
  };
  return (

    <Box
      bgcolor="#ebf9e7"
      flex={7}
      p={2}
      style={{ height: '93vh' }}
    >

      <div className="container20">

        <Box className="header">
          <Typography variant="h5" color={'gray'} className="good-morning" style={{ marginTop: '-12px' }}>
            Good morning
            <img src={good} alt="Avatar" style={{ marginLeft: "10px" }}></img>

          </Typography>

          <Typography variant="body1" className="home-button" onClick={handleClick} >
            Home 1
          </Typography>

          <IconButton color="primary" aria-label="notifications" className="notification-icon">
            <NotificationsOutlinedIcon />
          </IconButton>

          <Avatar alt="Profile" src="/path/to/profile.jpg" className="notification-icon" />
        </Box>

        {/* --------------------------- Card --------------------------------------*/}


        <div id="living">
          <Typography className="livingroom" style={{ marginLeft: '10px', fontSize: '19px', marginTop: '8px' }}>
           <strong>Living Room</strong> 
          </Typography>

          <Grid className='livingcard' >
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6} md={3}>
                <Card className="card" style={{ backgroundColor: ' rgba(89, 175, 221, 0.799)' }}>
                  <div>
                  </div>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card className="card1" style={{ backgroundColor: '#1C1C1C' }}>
                  <img src={temp} alt="Avatar" style={{ marginTop: '20px' }}></img>
                  <div className='text' style={{ marginTop: '-80px' }}>
                    <h3>Temperature</h3>
                    <h1><div style={{ fontSize: '25px', marginTop: '-15px' }}>28.C</div></h1>

                  </div>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card className="card2" style={{ backgroundColor: '#1C1C1C' }}>
                  <img src={hum} alt="Avatar" style={{ marginTop: '30px', width: '50px', height: '50px' }}></img>

                  <div className='text' style={{ marginTop: '-5px', marginLeft: '25px' }}>
                    <h3>Humidity</h3>
                    <h1><div style={{ fontSize: '25px', marginTop: '-10px' }}>76%</div></h1>
                  </div>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3} >
                <Card className="card3">
                  <div>
                    <div class="devtext">
                      <h2> One Touch </h2>
                    </div>


                    <Card className="smallcard" style={{ borderRadius: '15px' }}>
                      <div>
                      </div>
                    </Card>

                    <Card className="smallcard1" style={{ borderRadius: '15px' }}>
                      <div>
                      </div>
                    </Card>

                    <Card className="smallcard2" style={{ borderRadius: '15px' }}>
                      <div class='icons'>
                        <AddOutlinedIcon style={{ fontSize: '3em' }} />
                      </div>
                    </Card>
                    <div class="devtext1">
                      3+ device
                    </div>
                  </div>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card className="cardd" style={{ backgroundColor: '#f1b04c', fontSize: '19px' }}>
                  <DialpadIcon style={{ color: 'white', marginTop: '7px', marginLeft: '10px' }} />

                  <div className='text1'>
                    <h3>Devices</h3>
                  </div>
                  <FiberManualRecordIcon style={{ width: '10px', marginLeft: '25px', marginTop: '9px' }} />
                  <Typography style={{ fontSize: '12px', marginTop: '11px', marginLeft: '5px' }}>6 devices</Typography>
                  <Typography style={{ fontSize: '12px', marginTop: '11px', marginLeft: '20px', color: 'white' }}>4 devices</Typography>
                  <div style={{ marginLeft: '60px' }}>
                    <Switch
                      checked={checked}
                      onChange={handleToggle}
                      color="default"
                    />
                  </div>

                </Card>
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/* ---------------------------  Device--------------------------------------*/}

        <Box>
          <Typography variant="h6" className="classes" style={{ marginTop: '-45px', marginLeft: '10px', borderRadius: '10px' }}>
           <strong>Device</strong> 
          </Typography>

          {/* --------------------------- Navbar --------------------------------------*/}

          <Toolbar className='navbar'>
            <Button className="hover-button" color="inherit"><TungstenOutlinedIcon style={{ marginRight: '10px',color:'gray' }} />Lights</Button>
            <Button className="hover-button" color="inherit" ><TungstenOutlinedIcon style={{ marginRight: '10px',color:'gray' }} />Fans</Button>
            <Button className="hover-button" color="inherit"><TungstenOutlinedIcon style={{ marginRight: '10px' ,color:'gray'}} />Lights </Button>
            <Button className="hover-button" color="inherit"><TungstenOutlinedIcon style={{ marginRight: '10px',color:'gray' }} />Lights </Button>
            <Button className="hover-button" color="inherit"><TungstenOutlinedIcon style={{ marginRight: '10px' ,color:'gray'}} />Lights </Button>
          </Toolbar>

        </Box>
        {/* --------------------------- device card --------------------------------------*/}



        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card className="carddevice">
              <div >
                <div style={{ color: 'gray', marginTop: '30px', marginLeft: '5px', fontSize: '12px' }}>
                  lightxpm101
                </div >
                <div >
                  <Typography style={{ marginTop: '2px', marginLeft: '5px', fontSize: '25px' }}>Cromptom</Typography> </div>
                <div style={{ marginTop: '1px', marginLeft: '15px' }}>
                  <Switch {...Label} defaultChecked color="default" />
                </div>
              </div>
              <img src={lights} alt='Avatar' style={{width:'230px',height:'230px',marginTop:'-40px',marginLeft:'10px'}}></img>

            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="carddevice2">
              <div >
                <div style={{ color: 'gray', marginTop: '30px', marginLeft: '5px', fontSize: '12px' }}>
                  lightxpm101
                </div >
                <div >
                  <Typography style={{ marginTop: '2px', marginLeft: '5px', fontSize: '25px' }}>Cromptom </Typography> </div>
                <div style={{ marginTop: '1px', marginLeft: '15px' }}>
                  <Switch {...Label} defaultChecked color="default" />
                </div>
              </div>
              <img src={lights} alt='Avatar' style={{width:'230px',height:'230px',marginTop:'-40px',marginLeft:'10px'}}></img>

            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="carddevice3">
              <div className='rooms'>
                <h3>ROOMS</h3>
              </div>
              <div className='search-bar'>

                <input
                  type="text"
                  placeholder="search"

                />
              </div>
              <div>
                <Card className="innercard">
                  <Avatar alt="Profile Picture" src="/path/to/profile.jpg" style={{ marginLeft: '20px', width: '40px', height: '40px', marginTop: '15px' }} />
                  <Typography variant="h6" style={{ marginTop: "-39px", marginLeft: '90px', fontSize: '15px' }} >Living Room</Typography>
                  <Typography style={{ marginTop: "-1px", marginLeft: '95px', color: 'gray', fontSize: '12px' }} >7 device</Typography>
                </Card>

                <Card className="innercard1">
                  <Avatar alt="Profile Picture" src="/path/to/profile.jpg" style={{ marginLeft: '20px', width: '40px', height: '40px', marginTop: '15px' }} />
                  <Typography variant="h6" style={{ marginTop: "-39px", marginLeft: '90px', fontSize: '15px' }} >Living Room</Typography>
                  <Typography style={{ marginTop: "-1px", marginLeft: '95px', color: 'gray', fontSize: '12px' }} >7 device</Typography>
                </Card>

                <Card className="innercard1">
                  <Avatar alt="Profile Picture" src="/path/to/profile.jpg" style={{ marginLeft: '20px', width: '40px', height: '40px', marginTop: '15px' }} />
                  <Typography variant="h6" style={{ marginTop: "-39px", marginLeft: '90px', fontSize: '15px' }} >Living Room</Typography>
                  <Typography style={{ marginTop: "-1px", marginLeft: '95px', color: 'gray', fontSize: '12px' }} >7 device</Typography>
                </Card>

                <Card className="innercard1">
                  <Avatar alt="Profile Picture" src="/path/to/profile.jpg" style={{ marginLeft: '20px', width: '40px', height: '40px', marginTop: '15px' }} />
                  <Typography variant="h6" style={{ marginTop: "-39px", marginLeft: '90px', fontSize: '15px' }} >Living Room</Typography>
                  <Typography style={{ marginTop: "-1px", marginLeft: '95px', color: 'gray', fontSize: '12px' }} >7 device</Typography>
                </Card>


              </div>
            </Card>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className="carddevice4">
            <div >
              <div style={{ color: 'gray', marginTop: '19px', marginLeft: '5px', fontSize: '12px' }}>
                lightxpm101
              </div >
              <div >
                <Typography style={{ marginTop: '2px', marginLeft: '5px', fontSize: '25px' }}>Cromptom </Typography> </div>
              <div style={{ marginTop: '1px', marginLeft: '15px' }}>
                <Switch {...Label} defaultChecked color="default" />
              </div>
            </div>
            <img src={lights} alt='Avatar' style={{width:'230px',height:'230px',marginTop:'-40px',marginLeft:'10px'}}></img>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className="carddevice5">
            <div >
              <div style={{ color: 'gray', marginTop: '30px', marginLeft: '5px', fontSize: '12px' }}>
                lightxpm101
              </div >
              <div >
                <Typography style={{ marginTop: '2px', marginLeft: '5px', fontSize: '25px' }}>Cromptom </Typography> </div>
              <div style={{ marginTop: '1px', marginLeft: '15px' }}>
                <Switch {...Label} defaultChecked color="default" />
              </div>
            </div>
            <img src={lights} alt='Avatar' style={{width:'230px',height:'230px',marginTop:'-40px',marginLeft:'10px'}}></img>

          </Card>
        </Grid>


      </div>
    </Box>

  );
};

export default Fead;
