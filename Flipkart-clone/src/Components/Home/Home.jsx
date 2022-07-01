import React,{useEffect} from 'react'

//Sections
import Navbar from './Navbar'
import Banner from './Banner';
import { Box, styled } from '@mui/system';
import { getProducts } from '../../redux/actions/productActions';
import {useDispatch,useSelector} from 'react-redux'
import Slide from './Slide';
import MidSection from './MidSection';
const BoxComp = styled(Box)`
padding: 10px;
background:#f2f2f2
`
const Home = () => {
    const {products} = useSelector(state =>state.getProducts)
    // console.log(products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    },[dispatch]);
    return (
        <>
            <Navbar />
            <BoxComp>
            <Banner/>
            <Slide products={products} timer={true} title={'Deal of the day'}/>
            <MidSection/>
            <Slide products={products} timer={false} title={"Discounts of the day"}/>
            <Slide products={products} timer={false}title={"Trending Offers"}/>
            <Slide products={products}timer={false}title={"Season Top Offers"}/>
            </BoxComp>
        </>
    )
}

export default Home
