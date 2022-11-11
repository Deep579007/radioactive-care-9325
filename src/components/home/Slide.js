import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from './productdata';
import "./slide.css";
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
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

const Slide = () => {
    return (
        <div style={{ backgroundColor: "#080369", height: "520px" }} className='products_section'>
            <div className='products_deal'>
                <h2 style={{ textAlign: "center", color: "white" }}>BestSeller</h2>
            </div>

            <Carousel
                responsive={responsive}
                infinite={true}
                swipeable={true}
                showDots={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map((e) => {
                        return (
                            <div className='products_items'>
                                <div className='product_img'>
                                    <img src={e.url} alt="productitem" />
                                </div>
                                <p className='products_name'>{e.title}</p>
                                <p className='products_offer'>{e.shades}</p>
                                <p className='products_explore'>{e.price}</p>
                                <div className='cart_btn'>
                                    <Badge color="primary">
                                        <FavoriteBorderIcon id="icon" />
                                        <Button>Add To Cart</Button>
                                    </Badge>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Slide