import { Box, Grid, styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productActions'
import ActionItem from './ActionItem'
import ProductDetail from './ProductDetail'


const BoxComp = styled(Box)`
background:#f2f2f2;
`

const GridContain = styled(Grid)(({ theme }) => ({
    background: "#ffffff",
    display: "flex",
    [theme.breakpoints.down('md')]:{
        margin:0
    }
}))



const RightContainer = styled(Grid)`
margin-top:50px
`


const DetailsView = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { loading, product } = useSelector(state => state.getProductDetails);


    useEffect(() => {
        if (product && id !== product.id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch, id, loading, product])
    return (
        <BoxComp>
            {
                product && Object.keys(product).length &&
                <GridContain container>
                    <Grid item lg={4} md={4} sm={8} xs={12} >
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetail product={product} />
                    </RightContainer>
                </GridContain>
            }
        </BoxComp>
    )
}

export default DetailsView
