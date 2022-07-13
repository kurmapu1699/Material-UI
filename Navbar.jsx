import { Person, Mail,Notifications } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React,{useState}from 'react'




const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search = styled("div")(({theme}) => ({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"
}))


const Icons = styled(Box)(({theme}) => ({
    display:"none",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))

const UserBox = styled(Box)(({theme}) => ({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))



const Navbar = () => {

const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display: {xs:"none", sm:"block"}}}>
                CHARAN
            </Typography>
            <Person sx={{display: {xs:"block", sm:"none"}}}/>
            <Search>
                <InputBase placeholder='search....' />
                search
            </Search>
            <Icons>
            <Badge badgeContent={4} color="error">
                <Mail color="white" />
            </Badge>
            <Badge badgeContent={2} color="error">
                <Notifications color="white" />
            </Badge>
            <Avatar sx={{bgcolor:"red", width:30,height:30}} onClick={e => setOpen(true)}>
                C
            </Avatar>
            </Icons>
            <UserBox onClick={e => setOpen(true)}>
            <Avatar sx={{bgcolor:"red", width:30,height:30}}>
                C
            </Avatar>
            <Typography variant="span">
                Charan
            </Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar;
