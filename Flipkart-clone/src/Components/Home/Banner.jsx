import { styled } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel'
import { bannerData } from '../../Constants/data';
import 'react-multi-carousel/lib/styles.css';


//overwrite
const Image = styled('img')(({theme})=>({
    width: "100%",
    height: '280px',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height:180
    }
}))
const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Banner = () => {
    return (
        <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            // showDots={true}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true }
            autoPlaySpeed={2000}
            // keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            
        >
            {
                bannerData.map((data) => {
                    return (
                        <Image src={data.url} />
                    )
                })
            }
        </Carousel>
    )
}

export default Banner
