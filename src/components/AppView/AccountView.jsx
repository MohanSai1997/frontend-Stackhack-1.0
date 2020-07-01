import React, {useState, useContext} from 'react'
import {Grid} from '@material-ui/core'
import { MenuItem, Popper, Paper, ClickAwayListener, MenuList } from "@material-ui/core"
import AccountCircle from "@material-ui/icons/AccountCircle"
import IconButton from "@material-ui/core/IconButton"

import {UserContext} from "../contexts/user.status.context";


export const AccountView = () => {
    let {user} = useContext(UserContext)
    const [acctMenu, setAcctMenu] = useState(null)

    const handleAcctCirOpen = (e) => {
        setAcctMenu(e.currentTarget)
    }

    const handleAcctCirClose = () => {
        setAcctMenu(null)
    }


    return(
        <Grid container justify="center" alignItems="center">
            <IconButton onClick={handleAcctCirOpen}>
                <AccountCircle style={{ fontSize: "34px" }}/>
            </IconButton>
            <Popper
                anchorEl={acctMenu}
                open={Boolean(acctMenu)}
                placement="bottom-end"
            >
                {
                    () => (
                        <Paper>
                            <ClickAwayListener onClickAway={handleAcctCirClose}>
                                <MenuList>
                                    <MenuItem>
                                        Profile
                                    </MenuItem>
                                    <MenuItem onClick={() => user.signOut()}>Log out</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    )
                }
            </Popper>
        </Grid>
    )
}