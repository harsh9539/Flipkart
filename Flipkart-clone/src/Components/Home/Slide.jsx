
import { Button, Divider, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import Carousel from "react-multi-carousel"
import Countdown from 'react-countdown';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
// overwrite CSS
const BoxComp = styled(Box)`
margin-top:10px;
background:#ffffff;
`
const Deal = styled(Box)`
padding:15px 20px;
display:flex;
`
const DealText = styled(Typography)`
font-size:22px;
font-weight:bold;
margin-right:24px;

`
const Timer = styled(Box)`
display:flex;
margin-left:10px;
align-items:center;
color:#7f7f7f;
`
const Image = styled('img')({
    width: 'auto',
    height: 150
})
const Text = styled(Typography)`
font-size:14;
margin-top:5px;
`

const Slide = ({products,title,timer}) => {

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant='span'>{hours}:{minutes}:{seconds} Left</Box>
    }

    return (
        <BoxComp>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer && <Timer>
                        <img src={timerURL} style={{ width: 24 }} alt="timer" />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>
                }

                <Button variant="contained" color="primary" style={{ marginLeft: 'auto', borderRadius: 2, backgroundColor: '#2874f0', fontSize: 13 }}>View All</Button>
            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                // showDots={true}
                // ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                centerMode={true}
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
                    products.map(product => (
                        <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                        <Box style={{ padding: '25px 15px' }} textAlign='center'>
                            <Image src={product.url} alt='product' />
                            <Text style={{ fontWeight: 600, color: '#212121' }}>Here is the Title</Text>
                            <Text style={{ color: 'green' }}>{product.discount}</Text>
                            <Text style={{ color: '#212121' }}>{product.tagline}</Text>
                        </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </BoxComp>
    )
}


export default Slide;