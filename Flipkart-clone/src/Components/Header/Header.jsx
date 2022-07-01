import React from 'react'
//Sections
import Search from './Search.jsx'
import CustomButton from './CustomButton.jsx'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, styled, Box, Typography, IconButton, Drawer, List, ListItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
//This is used to overwrite the css of exsisting element
// All overwrited elements
const StyleHeader = styled(AppBar)`
background:#2874f0;
height:55px;
`
const BoxComp = styled(Link)`
margin-left:12%;
line-height:0;
text-decoration:none;
color:inherit
`
const SubHeading = styled(Typography)`
font-size:10px;
font-style:italic;
`
// for using html elemetns we have to pass it as a string 
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }

}))

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }
}))


const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const list = () => {
        <Box style={{ width: 200 }} onClick={{ handleClose }}>
            <List>
                <ListItem button>
                    <CustomButton />
                </ListItem>
            </List>
        </Box>
    }
    return (
        <StyleHeader>
            <Toolbar style={{ minHeight: '55px' }}>
                {/* Div is replaced by  box in materialUi */}
                <MenuButton onClick={handleOpen}>
                    <MenuIcon />
                </MenuButton>
                <Drawer open={open} onClick={handleClose}>
                    {list()}
                    <Box style={{ width: 200 }} onClick={{ handleClose }}>
                        <List>
                            <ListItem button>
                                <CustomButton />
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
                <BoxComp to='/' >
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                        {/* p is replaced by typography in materialUi */}
                        <SubHeading>Explore &nbsp;
                            <Box component='span' style={{ color: '#ffe500' }}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="subheading" />
                    </Box>
                </BoxComp>
                <Search />
                <CustomButtonWrapper>
                    <CustomButton />
                </CustomButtonWrapper>
            </Toolbar>
        </StyleHeader>
    )
}

export default Header
