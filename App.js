import React,{useState}from 'react'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
// import { Mode } from '@mui/icons-material';

function App() {

  const [mode,setMode] = useState("light")

  const darkTheme = createTheme({
    palette:{
      mode:mode
    },
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"} >
      <Navbar/>
      <Stack spacing={2} direction="row" justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
    </ThemeProvider>
    
  );
}

export default App;
