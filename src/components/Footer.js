import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});


const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        //functin to check if user has scrolled to the bottom or not
        const handleScroll = () => {
            const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 400;
            console.log(isBottom)
            setShowFooter(isBottom);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <div>
            {showFooter != false && (
                <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, backgroundColor: 'black', height: '250px' }}>
                    <Toolbar>
                        <Typography variant="h3" sx={{ mt: 8 }}>
                            <b>The Loud Journal</b>
                        </Typography>
                        <div>
                            <Typography sx={{ mt: 7, ml: 40, fontSize: 20 }}>
                                About Us<br />
                            </Typography>
                            <Typography sx={{ mt: 5, ml: 40, fontSize: 20 }}>
                                Contact US<br />
                            </Typography>
                        </div>
                        <div>
                            <Typography sx={{ mt: 7, ml: 40, fontSize: 20 }}>
                                Advertisement<br />
                            </Typography>
                            <Typography sx={{ mt: 5, ml: 40, fontSize: 20 }}>
                                Terms of Use<br />
                            </Typography>
                        </div>
                        <div>
                            <Typography sx={{ mt: 7, ml: 40, fontSize: 20 }}>
                                Apps<br />
                            </Typography>
                            <Typography sx={{ mt: 5, ml: 40, fontSize: 20 }}>
                                Newsletter<br />
                            </Typography>
                        </div>


                    </Toolbar>
                </AppBar>
            )}
        </div>
    )
}

export default Footer