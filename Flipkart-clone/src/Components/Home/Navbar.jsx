import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../Constants/data'

//overwriting
const BoxComp = styled(Box)(({theme}) => ({
display:'flex',
margin:"55px 130px 0 130px",
justifyContent:"space-between",
background:'white',
overflow:'hidden',
[theme.breakpoints.down('md')]: {
    margin:"0 0 0 0",
}
}));
const Container = styled(Box)`
padding:12px 8px;
text-align:center;
`
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`
const Navbar = () => {
    return (
        <Box style={{background:'white'}}>
        <BoxComp>
            {
                navData.map((data)=>{
                    return(
                    <Container>
                        <img src={data.url} alt="nav" style={{width:64}}/>
                        <Text>{data.text}</Text>
                    </Container>
                    )
                })
            }
        </BoxComp>
        </Box>
    )
}

export default Navbar
