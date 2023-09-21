import React from 'react'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 128,
    },
}));


const Header = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#D9D9D9' }}>
                    <StyledToolbar>


                        {/*  open drawer icon */}
                        <IconButton
                            edge="start"
                            aria-label="open drawer"
                            sx={{
                                mr: 5, mt: 5, ml: 5, '& svg': {
                                    width: '50px',
                                    height: '50px',
                                    color: '#050505'
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Date */}
                        <Typography
                            // variant="h5"
                            noWrap
                            component="div"
                            color="black"
                            sx={{ flexGrow: 1, alignSelf: 'flex-center', mt: 5 }}
                        >
                            Sunday<br />
                            21 September,2023
                        </Typography>


                        {/* Headline */}
                        <Typography
                            variant="h1"
                            noWrap
                            component="div"
                            color="black"
                            sx={{ flexGrow: 1, alignSelf: 'flex-center', mt: 5, fontSize: 64 }}
                        >
                            <b>The Loud Journal</b>
                        </Typography>



                        {/* toggle button */}
                        <IconButton
                            edge="start"
                            aria-label="open drawer"
                            sx={{
                                ml: 5, mt: 3, mr: 10, '& svg': {
                                    width: '80px',
                                    height: '80px',
                                    color: '#050505',
                                },
                            }}
                        >
                            <ToggleOnIcon />
                        </IconButton>

                    </StyledToolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Header