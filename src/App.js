
import { Box } from '@mui/material';
//import React, { useEffect, useState } from 'react';
import {  Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Devicepage } from './pages/Devicepage';
import { Settingpage } from './pages/Settingpage';
import { Automationpage } from './pages/Automationpage';

function App() {
 /* const[apiResponse,setAPIResponse]=useState('');

  useEffect(()=>{
    fetch('http://localhost:9000/testAPI')
    .then(res=>res.text())
    .then(res=>setAPIResponse(res));
  },[]);
  return (
    <Box>
    <div className="App">
       <p> {apiResponse}</p></div>*/
        return (
    <Box>
{
  <Routes>
   <Route path='/' element={<Home />}></Route>
   <Route path='device' element={<Devicepage />}></Route>
   <Route path='setting' element={<Settingpage/>}></Route>
   <Route path='automation' element={<Automationpage/>}></Route>

  </Routes>
}


       </Box>


    
  );
}

export default App;
