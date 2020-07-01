import React from 'react'
import { Grid, TextField, makeStyles, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {Taskscontainer} from "../Taskscontainer/Taskscontainer"
import { AccountView } from "./AccountView";
import { AddTask } from './AddTask';


const useStyle = makeStyles({
    title: {
        marginLeft: "24%",
        textAlign: "center",
        fontSize: "32px"
    },
    textFieldContainer: {
        textAlign: "center"
    },
    textField: {
        width: "72%",
        textAlign: "center"
    },
    filterFields: {
        width: "68%",
        margin: "auto"
    },
    filterFieldContainer: {
        textAlign: "center"
    },

})

export const AppView = () => {
    const classes = useStyle()

    // const top100Films = [
    //     { title: 'The Shawshank Redemption', year: 1994 },
    //     { title: 'The Godfather', year: 1972 }]
        
    return(
        <div>           
            <Grid container justify="center" >
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={10} style={{ margin: "auto"}}>
                            <div className={classes.title}>Task Mangement</div>
                        </Grid>
                        <Grid item xs={1}>
                            <AddTask />
                        </Grid>
                        <Grid item xs={1}>
                            <AccountView />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.textFieldContainer}>
                    <TextField 
                        id="search-field" 
                        label="Search Your tasks" 
                        variant="outlined" 
                        margin="dense"
                        className={classes.textField}
                    />
                </Grid>
                <Grid item xs={12}>
{/*                     
                <Autocomplete
                    multiple
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="filterSelectedOptions"
                        placeholder="Favorites"
                    />
                    )}
                /> */}
                </Grid>
                <Grid item xs={12} className={classes.filterFieldContainer}>
                    <Grid container className={classes.filterFields}>
                        <Grid item xs={3}>
                            Filter:
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="outlined">TO DO</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="outlined">In Progress</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="outlined">Completed</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center", maxWidth: "62%"}}>
                    <Taskscontainer />
                </Grid>
            </Grid>

        </div>
    )
}