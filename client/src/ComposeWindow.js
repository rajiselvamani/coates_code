import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useSelector } from 'react-redux';
import FormComponent from './FormComponent';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800]
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)'
}));

function ComposeWindow(props) {
    const { window, toggleDrawer } = props;
    const open = useSelector((state) => state.common.composeWindowState);

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: '70%',
                        width: '60%',
                        overflow: 'visible',
                        position: 'absolute',
                        left: '20%',
                        right: '10%',
                        top: '30%'
                    }
                }}
            />
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0
                    }}
                >
                    <Puller onClick={toggleDrawer(false)} />
                    <Typography sx={{ p: 2, color: 'text.secondary' }} color="primary">
                        New Message
                    </Typography>
                    <FormComponent toggleDrawer={toggleDrawer} />
                </StyledBox>
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto'
                    }}
                ></StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}

ComposeWindow.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func
};

export default ComposeWindow;
