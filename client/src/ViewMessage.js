import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function ViewMessage() {
    const [expanded, setExpanded] = React.useState(false);
    const message = useSelector((state) => state.common.selectedMessage);
    const navigate = useNavigate();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 445 }} className="card">
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={`To: ${message.to.join(',')}`}
                subheader="February 28, 2022"
            />
            <CardContent>
                {message.cc.length > 0 && (
                    <Typography variant="body2" color="text.secondary">
                        {`Cc:  ${message.cc.join(',')}`}
                    </Typography>
                )}
                {message.bcc.length > 0 && (
                    <Typography variant="body2" color="text.secondary">
                        {`Bcc:  ${message.bcc.join(',')}`}
                    </Typography>
                )}
                <Typography variant="body2" color="text.secondary">
                    {`Subject:  ${message.subject ?? ''}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {`Message:  ${message.body ?? ''}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => navigate('/')}>
                    Back
                </Button>
            </CardActions>
        </Card>
    );
}
