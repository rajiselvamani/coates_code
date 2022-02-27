import './App.css';
import React, { useState } from 'react';
import EmailInput from './EmailInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { addmessage, setComposeWindowState } from './Redux/action';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function FormComponent() {
    const dispatch = useDispatch({});
    const [inputState, setInputState] = useState({ provider: 'nodemailer', to: [], cc: [], bcc: [] });
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('error');
    const [snackbarMessage, setSnackbarMessage] = useState('error');
    const [loading, setLoading] = useState(false);

    const validateinput = () => {
        if (inputState.to.length === 0) {
            setSeverity('error');
            setSnackbarMessage('To address is required');
            setOpen(true);
            return;
        }
    };
    const setSuccessStates = () => {
        setLoading(false);
        setSeverity('success');
        setSnackbarMessage('Email sent successfully!!');
        setOpen(true);
        setTimeout(function () {
            dispatch(addmessage(inputState));
            dispatch(setComposeWindowState(false));
        }, 2000);
    };
    const setErrorStates = () => {
        setLoading(false);
        setSeverity('error');
        setSnackbarMessage('Error in sending email!!');
        setOpen(true);
    };
    const handleSend = () => {
        validateinput();
        setLoading(true);
        axios.post('/api/send', inputState).then(
            (response) => {
                setSuccessStates();
            },
            (error) => {
                setErrorStates();
            }
        );
    };
    const handleChange = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        });
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <div className="form">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {/* To Input */}
                    <Grid item xs={1} />
                    <Grid item xs={1}>
                        <FormLabel>To</FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                        <EmailInput
                            label={'To'}
                            onChange={(e) => {
                                setInputState({
                                    ...inputState,
                                    to: e
                                });
                            }}
                            inputstate={inputState.to}
                        />
                    </Grid>
                    <Grid item xs={1} />

                    {/* Cc Input */}
                    <Grid item xs={1} />
                    <Grid item xs={1}>
                        <FormLabel>Cc</FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                        <EmailInput
                            label={'CC'}
                            onChange={(e) => {
                                setInputState({
                                    ...inputState,
                                    cc: e
                                });
                            }}
                            inputstate={inputState.cc}
                        />
                    </Grid>
                    <Grid item xs={1} />

                    {/* Bcc Input */}
                    <Grid item xs={1} />
                    <Grid item xs={1}>
                        <FormLabel>Bcc</FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                        <EmailInput
                            label={'Bcc'}
                            onChange={(e) => {
                                setInputState({
                                    ...inputState,
                                    bcc: e
                                });
                            }}
                            inputstate={inputState.bcc}
                        />
                    </Grid>
                    <Grid item xs={1} />

                    {/* Subject Input */}
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="message">Subject</InputLabel>
                            <Input id="message" onChange={handleChange} name="subject" value={inputState.subject} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={1} />

                    {/* Provider Input */}
                    <Grid item xs={1} />
                    <Grid item xs={2}>
                        <FormLabel>Provider</FormLabel>
                    </Grid>
                    <Grid item xs={9} />
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="nodemailer" name="provider" row onChange={handleChange} value={inputState.provider}>
                            <FormControlLabel value="nodemailer" control={<Radio />} label="Node Mailer" />
                            <FormControlLabel value="sendgrid" control={<Radio />} label="Send Grid" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={1} />

                    {/* Message Input */}
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <TextareaAutosize
                            maxRows={6}
                            aria-label="message"
                            placeholder="Enter your message"
                            defaultValue=""
                            style={{ width: 600, height: 200 }}
                            name="body"
                            onChange={handleChange}
                            value={inputState.body}
                        />
                    </Grid>
                    <Grid item xs={1} />

                    {/* Send Button */}
                    <Grid item xs={4} />
                    <Grid item xs={2}>
                        <Button variant="contained" className="button" onClick={handleSend} disabled={loading} endIcon={<SendIcon />}>
                            {loading && (
                                <Box sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                </Box>
                            )}
                            send
                        </Button>
                    </Grid>
                    <Grid item xs={5} />
                </Grid>
            </Box>

            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default FormComponent;
