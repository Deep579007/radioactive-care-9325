import React from 'react'
import Carousel from 'react-material-ui-carousel'


const data = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/b69d2fc2-53f5-45ed-8e89-8dcd108ed2b6.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/a41d5b02-1299-4e1a-b4e1-ba19484796b5.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/e352ada8-9b87-43ff-a84a-6ed425b0d55c.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/9f8fe6f9-3ebe-4d1b-9b15-d5e5e642868b.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/1fb4eae2-6719-4f1f-b80e-efda1cf48362.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/46ff1a05-2660-4fdc-83e4-fb5cfc36f102.jpg"
]

const Banner = () => {
    return (
        <Carousel
            className='carasousel'
            autoPlay={true}
            animation='slide'
            navButtonsAlwaysInvisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    backgroundColor: "#494949",
                    color: "#494949",
                    borderRadius: 0,
                }
            }}
        >
            {
                data.map((imag, i) => {
                    return (
                        <>
                            <img style={{ width: "100%" }} src={imag} alt="" className="banner_img" />
                        </>
                    )
                })
            }
        </Carousel>
    )
}

export default Banner