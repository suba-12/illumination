import { Box, Stack } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'
import Setting from '../components/Setting'

export const Settingpage = () => {
  return (
    <Box>
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar/>
            <Setting/>
</Stack>
    </Box>
  )
}
