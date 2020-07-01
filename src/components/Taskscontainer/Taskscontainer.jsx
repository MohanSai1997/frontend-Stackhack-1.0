import React, { useContext } from "react"
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { UserContext } from "../contexts/user.status.context"
import { Task } from "./Task"

export const Taskscontainer = () => {
    const {user} = useContext(UserContext)
    return (
        <div>
            <Paper elevation={3}> 
                <Grid container>
                    <Grid item xs={4}>
                        <h4>Title</h4>
                    </Grid>
                    <Grid item xs={4}>
                        <h3>Status</h3>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Date</h4>
                    </Grid>
                </Grid>
            </Paper>
        {
            user.data.map((task, index) => (<Task key={index} content={task}/>))
        }
        </div>
    )
}