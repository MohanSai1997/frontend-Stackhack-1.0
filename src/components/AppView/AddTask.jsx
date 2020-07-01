import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid } from '@material-ui/core';
import "date-fns"
import DateFnsUtils from '@date-io/date-fns'
import { UserContext } from '../contexts/user.status.context';

export const AddTask = (props) => {
    const [message, setMessage] = useState("")
    const [open, setOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18'))
    const localData = JSON.parse(localStorage.getItem("user"))

    const {user} = useContext(UserContext)

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        const getResponse = async () => {
            await fetch(
                "http://localhost:8080/api/todo/add",
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: localData.email,
                        message: message,
                        status: "todo",
                        completeBy:  selectedDate
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": localData.token
                    }
                }
            ).then( res => res.json())
            .then( data => {
                user.state()
            })
        }

        getResponse()
        setOpen(false);
    };

    return (
    <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Task
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    variant="outlined"
                    margin="dense"
                    id="name"
                    label="Task Name"
                    type="email"
                    fullWidth
                    required
                    onChange={(e) => setMessage(e.target.value)}
                />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            </DialogContent>
        <DialogActions>
            <Button 
                color="primary" 
                variant="outlined"
                onClick={handleClose}
            >
                save
            </Button>
        </DialogActions>
        </Dialog>
    </div>
    );
    }
