import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';


function Header() {
  const title = "An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional , well-structured resumes in a few minutes.Users can select templates,edit content,preview their resume,and download it in formats such as PDF."
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"sx={{backgroundColor:'#672420'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'40px'} src="https://static.vecteezy.com/system/resources/thumbnails/050/700/033/small_2x/resume-flat-business-management-document-icon-illustration-png.png" alt="icon" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-decoration-none text-light'>AI rBUILDER</Link>
          </Typography>
          <Tooltip title={title}><Button color="inherit">ABOUT US</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
