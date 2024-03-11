import React from 'react'
import Sidebar from '../components/Sidebar'
import { Box, Stack } from '@mui/material'
import Automation from '../components/Automation'

export const Automationpage = () => {
  return (
<Box>
<Stack direction="row" spacing={2} justifyContent="space-between">

      <Sidebar/>
      <Automation/>
      </Stack>
  </Box>
  )
}
