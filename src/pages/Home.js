import React from 'react'
import Sidebar from '../components/Sidebar'
import Fead from '../components/Fead'
import { Box, Stack } from '@mui/material'

export const Home = () => {
  return (
<Box>
<Stack direction="row" spacing={2} justifyContent="space-between">

      <Sidebar/>
      <Fead/>
      </Stack>
  </Box>
  )
}
