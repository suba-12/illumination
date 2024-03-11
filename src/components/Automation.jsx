import React from 'react';
import {
    Avatar,
    Box, Card, Grid, IconButton, Typography,

} from '@mui/material';
import auto2 from '../assests/autodevice.png'
import auto3 from '../assests/fourdotgreen.png'
import auto1 from '../assests/fourdotorange.png'

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Switch } from '@mui/material';


import "../assests/Style.css";
import { Label } from '@mui/icons-material';



const handleClick = () => {
    console.log('Home button clicked!');
};


const Automation = () => {

    return (

        <Box
            bgcolor="#ebf9e7"
            flex={7}
            p={2}
            style={{ height: '94vh' }}
        >

            <div className="container20">

                <Box className="header">
                    <Typography variant="h5" color={'gray'} className="good-morning" style={{ marginTop: '8px' }}>
                        Good morning
                    </Typography>

                    <Typography variant="body1" className="home-button" onClick={handleClick} >
                        Home 1
                    </Typography>

                    <IconButton color="primary" aria-label="notifications" className="notification-icon">
                        <NotificationsOutlinedIcon />
                    </IconButton>

                    <Avatar alt="Profile" src="/path/to/profile.jpg" className="notification-icon" />
                </Box>


                <div id="living">
                    <Typography className="livingroom" style={{ marginLeft: '10px', fontSize: '25px', marginTop: '20px' }}>
                        Automation
                    </Typography>


                </div>
                <div>
                    <Card style={{ marginLeft: '120px', marginTop: '40px', width: '110px', height: '35px', borderRadius: '20px' }}>
                        <Typography style={{ marginLeft: '22px', marginTop: '10px' }}>
                           <strong>Scenes</strong> 
                        </Typography>
                    </Card>
                    <Card style={{ marginLeft: '240px', marginTop: '-35px', width: '110px', height: '35px', borderRadius: '20px' }}>
                        <Typography style={{ marginLeft: '22px', marginTop: '10px' }}>
                          <strong>Routine</strong>  
                        </Typography>
                    </Card>
                    <Card style={{ marginLeft: '360px', marginTop: '-35px', width: '110px', height: '35px', borderRadius: '20px' }}>
                        <Typography style={{ marginLeft: '22px', marginTop: '10px' }}>
                           <strong>Mode</strong> 
                        </Typography>
                    </Card>

                </div>






                <div>
                    <Card style={{ marginLeft: '50px', marginTop: '30px', width: '500px', height: '220px', borderRadius: '15px' }}>
                        <Typography variant="h5" style={{ marginLeft: '30px', marginTop: '15px' }} >
                            Automation name
                            <div style={{ marginLeft: '370px', marginTop: '-30px' }}>
                                <Switch {...Label} defaultChecked color="default" />
                            </div>
                        </Typography>
                        <div style={{ marginLeft: '40px', marginTop: '12px', fontSize: '17px' }}>
                            <Typography><strong>IF &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'->'} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DO </strong></Typography>
                        </div>
                        <div>
                            < LocationOnOutlinedIcon style={{ marginTop: '20px', marginLeft: '25px' }} />
                            <Typography style={{ marginLeft: '50px', fontSize: '15px', marginTop: '-33px' }}>Location</Typography>
                            <Typography style={{ marginLeft: '50px', fontSize: '10px', marginTop: '-1px', color: 'gray' }}>Living room</Typography>
                        </div>
                        <div style={{ marginTop: '-52px', marginLeft: '100px' }}>
                            < AccessTimeOutlinedIcon style={{ marginTop: '20px', marginLeft: '25px' }} />
                            <Typography style={{ marginLeft: '50px', fontSize: '15px', marginTop: '-33px' }}>Time</Typography>
                            <Typography style={{ marginLeft: '50px', fontSize: '10px', marginTop: '-1px', color: 'gray' }}>Around</Typography>
                            <Typography style={{ marginLeft: '50px', fontSize: '8px', marginTop: '-1px', color: 'gray' }}>06 : 12.00</Typography>
                            <Typography style={{ marginTop: "18px", color: 'gray', marginLeft: '-65px' }}>+3 other rules</Typography>

                        </div>
                        <div style={{ marginLeft: '270px', marginTop: '-160px' }}>
                            <div >
                                <Typography style={{ marginLeft: '9px', marginBottom: '10px', marginTop: '30px' }}>Activate</Typography>
                            </div>
                            <Card className="smallcardd" style={{ borderRadius: '15px', marginLeft: '2px', marginTop: '-5px' }}>
                                <div>
                                </div>
                            </Card>

                            <Card className="smallcardd1" style={{ borderRadius: '15px', marginLeft: '73px', marginTop: "-90px" }}>
                                <div>
                                </div>
                            </Card>

                            <Card className="smallcardd2" style={{ borderRadius: '15px', marginLeft: '145px', marginTop: "-90px" }}>

                            </Card>
                            <div >
                                <Typography style={{ marginLeft: '130px', marginTop: '8px', fontSize: '10px', color: 'gray' }}>+3 otherdevice</Typography>
                            </div>
                        </div>
                    </Card>



                    <Card style={{ marginLeft: '50px', marginTop: '30px', width: '500px', height: '220px', borderRadius: '15px' }}>
                        <Typography variant="h5" style={{ marginLeft: '30px', marginTop: '15px' }} >
                            Automation name
                            <div style={{ marginLeft: '370px', marginTop: '-30px' }}>
                                <Switch {...Label} defaultChecked color="default" />
                            </div>
                        </Typography>
                        <div style={{ marginLeft: '40px', marginTop: '12px', fontSize: '17px' }}>
                            <Typography><strong>IF &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'->'} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DO </strong></Typography>
                        </div>
                        <div>
                            < LocationOnOutlinedIcon style={{ marginTop: '20px', marginLeft: '25px' }} />
                            <Typography style={{ marginLeft: '50px', fontSize: '15px', marginTop: '-33px' }}>Location</Typography>
                            <Typography style={{ marginLeft: '50px', fontSize: '10px', marginTop: '-1px', color: 'gray' }}>Living room</Typography>
                        </div>
                        <div style={{ marginTop: '-52px', marginLeft: '100px' }}>
                            < AccessTimeOutlinedIcon style={{ marginTop: '20px', marginLeft: '25px' }} />
                            <Typography style={{ marginLeft: '50px', fontSize: '15px', marginTop: '-33px' }}>Time</Typography>
                            <Typography style={{ marginLeft: '50px', fontSize: '10px', marginTop: '-1px', color: 'gray' }}>Around</Typography>
                            <Typography style={{ marginLeft: '50px', fontSize: '8px', marginTop: '-1px', color: 'gray' }}>06 : 12.00</Typography>
                            <Typography style={{ marginTop: "18px", color: 'gray', marginLeft: '-65px' }}>+3 other rules</Typography>

                        </div>




                        <div style={{ marginLeft: '270px', marginTop: '-160px' }}>
                            <div >
                                <Typography style={{ marginLeft: '9px', marginBottom: '10px', marginTop: '30px' }}>Activate</Typography>
                            </div>
                            <Card className="smallcardd" style={{ borderRadius: '15px', marginLeft: '2px', marginTop: '-5px' }}>
                                <div>
                                </div>
                            </Card>

                            <Card className="smallcardd1" style={{ borderRadius: '15px', marginLeft: '73px', marginTop: "-90px" }}>
                                <div>
                                </div>
                            </Card>

                            <Card className="smallcardd2" style={{ borderRadius: '15px', marginLeft: '145px', marginTop: "-90px" }}>

                            </Card>
                            <div >
                                <Typography style={{ marginLeft: '130px', marginTop: '8px', fontSize: '10px', color: 'gray' }}>+3 otherdevice</Typography>
                            </div>
                        </div>
                    </Card>
                </div>




                <div
                    style={{
                        position: 'absolute',
                        top: '100px',

                    }}>
                    <div style={{ marginLeft: '750px', marginTop: '5px' }}>
                        <Card style={{ marginRight: '10px', marginTop: '5px', width: '140px', height: '40px', borderRadius: '20px' }}>
                            <Typography style={{ marginLeft: '22px', marginTop: '10px' }}>
                                <strong> Create New</strong>
                            </Typography>
                        </Card>
                        <Card style={{ marginLeft: '180px', marginTop: '-38px', width: '140px', height: '40px', borderRadius: '20px' }}>
                            <Typography style={{ marginLeft: '22px', marginTop: '10px' }}>
                                <strong>Suggestion</strong>
                            </Typography>
                        </Card>
                    </div>
                    <div style={{ marginLeft: '750px', marginTop: '5px' }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className="autocard" style={{ marginLeft: '-20px', borderColor: 'blue' }}>
                                <div>
                                    <div>
                                        <div>
                                            <img src={auto2} alt="Avatar" style={{ marginTop: '8px', marginLeft: '10px' }} />
                                            <Typography style={{ marginTop: '-40px', marginLeft: '60px', fontSize: '26px' }}>Mode</Typography>
                                        </div>

                                        <Typography style={{ fontSize: '13px', marginTop: '-10px', marginLeft: '5px' }}><p>The curtains shut out most of the light from the street. The moon cast a white light into the room. He could hardly see her in the dim light.</p></Typography>
                                        <button style={{ marginLeft: '240px', borderRadius: '20px', backgroundColor: '#570E88', color: 'white', width: '80px', height: '30px', marginTop: '-18px' }}>Create </button>
                                    </div>
                                </div>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Card className="autocard1" style={{ marginLeft: '-20px' }}>
                                <div>
                                    <div>
                                        <img src={auto1} alt="Avatar" style={{ marginTop: '8px', marginLeft: '10px' }} />
                                        <Typography style={{ marginTop: '-40px', marginLeft: '60px', fontSize: '26px' }}>Mode</Typography>
                                    </div>

                                    <Typography style={{ fontSize: '13px', marginTop: '-10px', marginLeft: '5px' }}><p>The curtains shut out most of the light from the street. The moon cast a white light into the room. He could hardly see her in the dim light.</p></Typography>
                                    <button style={{ marginLeft: '240px', borderRadius: '20px', backgroundColor: '#fBC02D', color: 'white', width: '80px', height: '30px', marginTop: '-18px' }}>Create </button>
                                </div>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Card className="autocard2" style={{ marginLeft: '-20px', }}>
                                <div>
                                    <div>
                                        <div>
                                            <img src={auto3} alt="Avatar" style={{ marginTop: '8px', marginLeft: '10px' }} />
                                            <Typography style={{ marginTop: '-40px', marginLeft: '60px', fontSize: '26px' }}>Mode</Typography>
                                        </div>

                                        <Typography style={{ fontSize: '13px', marginTop: '-10px', marginLeft: '5px' }}><p>The curtains shut out most of the light from the street. The moon cast a white light into the room. He could hardly see her in the dim light.</p></Typography>
                                        <button style={{ marginLeft: '240px', borderRadius: '20px', backgroundColor: '#70c927', color: 'white', width: '80px', height: '30px', marginTop: '-18px' }}>Create </button>
                                    </div>
                                </div>
                            </Card>
                        </Grid>
                    </div>

                </div>
            </div>

        </Box>

    );
};

export default Automation;
