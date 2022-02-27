import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';


export default function EmailComponent() {
    return (
        <React.Fragment>
            <AppBar position="fixed" color="primary" sx={{ bottom: 'auto', top: 0 }}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLTWi8oEgLnF9st6cvP7x8AkOQhrS89ShtQ&usqp=CAU" width="50" height="30" alt="logo" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Email
                    </Typography>
                    <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar></Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
