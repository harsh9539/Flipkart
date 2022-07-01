import { Box, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Profile = (props) => {
    const [open,setOpen] = useState(false);
    const handleClick = (e)=>{
        setOpen(e.currentTarget);
    }
    const handleClose = ()=>{
        setOpen(false);
    }
    const logout = ()=>{
        props.setAccount('');
    }
    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: 3,cursor:'pointer' }}>{props.account}</Typography>

            </Box>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={()=>{handleClose();logout()}}>
                    <PowerSettingsNewIcon color='primary'/>
                    <Typography>LogOut</Typography></MenuItem>
            </Menu>
        </>
    )
}

export default Profile
