import { Box, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import React from 'react'

 const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}} >
        <Box position='fixed'>
        <ListItemButton component="a" href="#Home">
            <ListItemIcon >
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon >
                <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon >
                <AddIcCallIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon >
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon >
                <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon >
                <Brightness6Icon />
            </ListItemIcon>
            <Switch onClick={e=>setMode(mode === "light" ? "dark" : "light")} />
        </ListItemButton>
        </Box>
    </Box>
    
  )
}

export default Sidebar;
