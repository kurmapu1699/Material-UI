import { Avatar, AvatarGroup, Box, Typography } from '@mui/material';
import React from 'react'

 const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position='fixed'>
        <Typography varient ='h5' mt={2} mb={2}>
          Online Frineds
        </Typography>
        <AvatarGroup max={3} sx={{margin:'5'}}>
          <Avatar alt="Remy Sharp" src="https://www.freepik.com/free-photos-vectors/avatar" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography mt={2} mb={2}>
          Recentlyt Viewed
        </Typography>
        <AvatarGroup max={4} sx={{margin:'5'}}>
          <Avatar alt="A" src="https://www.freepik.com/free-photos-vectors/avatar" />
          <Avatar alt="B" src="/static/images/avatar/2.jpg" />
          <Avatar alt="C" src="/static/images/avatar/3.jpg" />
          <Avatar alt="D" src="/static/images/avatar/4.jpg" />
          <Avatar alt="T" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>        
      </Box>
    </Box>
  )
}

export default Rightbar;
