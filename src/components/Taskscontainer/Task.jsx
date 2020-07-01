import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper';
import { Grid, Button, TextField } from '@material-ui/core';

export const Task = (props) => {
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [message, setMessage] = useState(props.content.message)
    const [status, setStatus] = useState(props.content.status)
    const [date, setDate] = useState(props.content.completeBy)

    return (
        <Paper elevation={3}> 
            {
                (isEditOpen) ? (
                <Grid container>
                    <Grid item xs={3}>
                        <TextField 
                            variant="outlined"
                            size="small"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField 
                            variant="outlined"
                            size="small"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField 
                            variant="outlined"
                            size="small"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" color="primary" onClick={() => setIsEditOpen(false)}>
                            save
                        </Button>
                    </Grid>
                </Grid>
                ) : (
                <Grid container>
                    <Grid item xs={3}>
                        <h4>{props.content.message}</h4>
                    </Grid>
                    <Grid item xs={3}>
                        <h3>{props.content.status}</h3>
                    </Grid>
                    <Grid item xs={3}>
                        <h4>{props.content.completeBy}</h4>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" color="primary" onClick={() => setIsEditOpen(true)}>
                            Edit
                        </Button>
                    </Grid>
                </Grid>
                )
            }
        </Paper>
    )
}