import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedMessage, removeSelectedMessage } from './Redux/action';

export default function Inbox() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [checked, setChecked] = React.useState([]);
    const messages = useSelector((state) => state.common.messages);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {messages.map((item) => {
                const labelId = `checkbox-list-label-${item.id}`;

                return (
                    <ListItem
                        key={item.id}
                        secondaryAction={
                            <>
                                <IconButton
                                    edge="end"
                                    aria-label="comments"
                                    onClick={() => {
                                        dispatch(setSelectedMessage(item));
                                        navigate('/message');
                                    }}
                                >
                                    <CommentIcon />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="comments"
                                    onClick={() => {
                                        dispatch(removeSelectedMessage(item.id));
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={handleToggle(item)} dense>
                            <ListItemIcon>
                                <Checkbox edge="start" checked={checked.indexOf(item) !== -1} tabIndex={-1} disableRipple inputProps={{ 'aria-labelledby': labelId }} />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={item.to.join(',')} secondary={item.subject} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}
