import { Box, Stack } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'
import Device from '../components/Device'

export const Devicepage = () => {
  return (
    <Box>
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar/>
            <Device/>
</Stack>
    </Box>
  )
}
