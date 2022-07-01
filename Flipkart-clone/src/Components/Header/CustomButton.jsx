import { Box, Button, Typography, styled, Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState, useContext } from 'react'
import { DataContext } from '../../context/DataProvider';
//Components
import LoginDialog from '../Login/LoginDialog';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// overwrite
const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: "0 3% 0 5%",

    "&>button,&>p,&>div": {
        marginRight: "40px !important",
        fontSize: "16px",
        alignItems: "center"
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

const BoxContain = styled(Link)(({ theme }) => ({
    display: "flex",
    paddingTop:10,
    textDecoration:'none',
    color:'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }

}))

const LoginButton = styled(Button)`
color:#2874f0;
background:#fff;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px
`
const CustomButton = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);
    const openDialog = () => {
        setOpen(true);
    }
const {cartItems} = useSelector(state=>state.cart);


    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton onClick={() => openDialog()} variant='contained'>Login</LoginButton>
            }
            <Typography style={{ marginTop: 3, width: 140 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>

            <BoxContain to="/cart">
                <Badge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCartIcon />
                </Badge>
                <Typography>cart</Typography>
            </BoxContain>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButton
