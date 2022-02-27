import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ComposeWindow from './ComposeWindow';
import SentItems from './SentItems';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setComposeWindowState } from './Redux/action';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto'
});

export default function EmailComponent() {
    const dispatch = useDispatch();
    const open = useSelector((state) => state.common.composeWindowState);
    const messages = useSelector((state) => state.common.messages);
    const toggleDrawer = (newOpen) => () => {
        dispatch(setComposeWindowState(newOpen));
    };
    return (
        <React.Fragment>
            <Toolbar />
            {messages.length > 0 ? (
                <>
                    <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }} align="center" color="primary">
                        Your Email History
                    </Typography>
                    <SentItems />
                </>
            ) : (
                <>
                    <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }} align="center" color="primary">
                        No Email History Found
                    </Typography>
                    <img src="https://media.istockphoto.com/vectors/error-page-dead-emoji-illustration-vector-id1095047472?k=20&m=1095047472&s=612x612&w=0&h=1lDW_CWDLYwOUO7tAsLHnXTSwuvcWqWq4rysM1y6-E8=" alt="not found" />
                </>
            )}
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <StyledFab color="secondary" aria-label="add" onClick={toggleDrawer(true)}>
                        <AddIcon />
                    </StyledFab>
                    <Box sx={{ flexGrow: 1 }} />
                </Toolbar>
            </AppBar>
            {open && <ComposeWindow toggleDrawer={toggleDrawer} />}
        </React.Fragment>
    );
}
