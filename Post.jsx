import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors'
import ShareIcon from '@mui/icons-material/Share';
// import Image from 'mui-image'
import React from 'react'

const post = () => {
  return (
    <Box>  
    <Card sx={{margin:5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          C
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="This is kurmapu"
      subheader="hello world"
    />
    <CardMedia
      component="img"
      height="200"
      alt="Nature"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}} />}  />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  </Box>
  )
}


export default post;