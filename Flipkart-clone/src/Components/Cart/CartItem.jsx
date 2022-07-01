import { Box, Typography, styled, Button } from '@mui/material'
import React from 'react'
import { addEllipsis } from '../../utils/common-utils'
import GroupedButton from './ButtonGroup'
import {removeFromCart} from '../../redux/actions/cartActions'
import { useDispatch } from 'react-redux'

const Component = styled(Box)`
border-top: 2px solid #f0f0f0;
background:white;
display:flex;
`
const LeftComp = styled(Box)`
margin:20px;
display:flex;
flex-direction:column;

`

const SmallText = styled(Typography)`
font-size:14px;
color:#878787;
margin-top:10px;
`

const Remove = styled(Button)`
margin-top:20px;
font-size:16px;
color:black;
font-weight:600;
`


const CartItem = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

const dispatch = useDispatch();
    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id));
    }

    return (
        <Component>
            <LeftComp>
                <img src={item.url} style={{height:100,width:100}} alt='product' />
                <GroupedButton/>
            </LeftComp>
            <Box style={{margin:20}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <Box component={'span'}><img src={fassured} style={{ width: 50, marginLeft: 10 }} alt='flipkart' /></Box>
                </SmallText>
                <Typography style={{margin:'20px 0'}}>
                    <Box component='span' style={{ fontWeight:600,fontSize:18 }} >₹{item.price.cost}</Box>&nbsp;
                    <Box component='span' style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;
                    <Box component='span' style={{ color: '#388E3C' }} >{item.price.discount}</Box>
                </Typography>
                <Remove onClick={()=>removeItemFromCart(item.id)}>Remvoe</Remove>
            </Box>
        </Component>
    )
}

export default CartItem
