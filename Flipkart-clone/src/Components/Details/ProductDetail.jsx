import React from 'react'
import { Box, styled, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const SmallText = styled(Box)`
font-size:14px;
&>p{
    font-size:14px;
    margin-top:10px;
}
`
const StyledIcon = styled(LocalOfferIcon)`
margin-right:10px;
color:#00cc00;
font-size:15px
`
const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;
&>td{
    font-size:14px;
    margin-top:10px;
    border:none;
}
`

const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date = new Date(new Date().getTime() + (5 * 24 * 60*60 * 1000))
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>8 Ratings and 1 reviews
                <Box component='span'><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt='img' /></Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: 28 }} >₹{product.price.cost}</Box>&nbsp;
                <Box component='span' style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;
                <Box component='span' style={{ color: '#388E3C' }} >{product.price.discount}</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledIcon />Special PriceGet extra 10% offT&C</Typography>
                <Typography><StyledIcon />Combo OfferBuy 2 items save 5%; Buy 3 or more save 10%See all productsT&C</Typography>
                <Typography><StyledIcon />Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</Typography>
                <Typography><StyledIcon />Bank Offer5% Cashback up to ₹3000 on IDFC FIRST Bank Credit Card EMI transactions of ₹5000 and aboveT&C</Typography>
                <Typography><StyledIcon />Bank OfferFlat ₹100 Off* On 1st Transaction through Flipkart Pay LaterT&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()}| 40$</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                        <TableCell style={{fontWeight:600}}>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell style={{color:"#2874f0",fontWeight:600}}>
                            <Box component='span' style={{color:'#2874f0'}}>SuperComNet</Box>
                            <Typography>GST invoice </Typography>
                            <Typography>View more sellers starting from ${product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}><img src={adURL} style={{width:390}} alt="img"/></TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Description</TableCell>
                        <TableCell style={{fontWeight:600}}>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail
