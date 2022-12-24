import React, { useState, useEffect } from 'react'
import './Sdesc.css'
import Clock from './timer'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Center, Spinner, Button } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

function Sdec() {
    const Navigate = useNavigate()
    const { id } = useParams()
    const [data, setdata] = useState({})
    // console.log(data1)

    useEffect(() => {
        axios.get(`https://render-mock-server.onrender.com/skincare/${id}`)
            .then(res => {
                console.log(res)
                setdata(res.data)
            })
    }, [])

    const unfilledLike = "https://cdn-icons-png.flaticon.com/128/535/535285.png"
    const filledLike = "https://cdn-icons-png.flaticon.com/128/7299/7299756.png"

    function randomOff() {
        // let off = Math.floor(Math.random()*10)+10
        let offNew = 15 + "%"
        return offNew
    }

    const [timer, setTimer] = useState({
        h1: 0,
        m1: 0,
        s1: 0
    })

    const [counter, setcounter] = useState(1)

    function add() {
        if (counter < 10) {
            setcounter(prev => prev + 1)
        }
    }

    function remove() {
        if (counter > 0) {
            setcounter(prev => prev - 1)
        }
    }

    const [liked, setliked] = useState(false)

    function handleCart() {
        axios.post("https://render-mock-server.onrender.com/cart", data)
            .then(res => {
                // console.log(res)
            })
            .catch(err => {
                // console.log("postCartObjError")
            })
        setTimeout(() => {
            Navigate('/cart')
        }, 1000);
    }

    function handleLike() {
        setliked(prev => !prev)
        axios.post("https://render-mock-server.onrender.com/wish", data)
            .then(res => {
                // console.log(res)
            })
            .catch(err => {
                // console.log("postWishListObjError")
            })
            setTimeout(() => {
                Navigate('/wish')
            }, 1000);
    }

    const lenObj = Object.keys(data).length
    return (
        <div id="biggyS">
            <div className='mainS'>
                <img className='headerImgS' src="https://img.gkbcdn.com/s3/bn/2205/1500x125-6271031b2b40c930d0488be9.jpg" alt="" />
                {lenObj === 0 ?

                    <Center>
                        <Spinner size='xl' color='red.500' />
                    </Center>
                    :
                    <div className="subMainS">
                        <div className="mainImgBoxS">
                            <img src={data.image} alt="watch" />
                        </div>
                        <div className="rightMainS">
                            <p className='titleS'>{data.title}</p>
                            <div className='forSpansS'>
                                <span>Brand: <span>{data.cat}</span> </span>
                                <span>Item Code: <span>345617</span>
                                </span>
                            </div>
                            <div className='timerS'>
                                <div className='timerLeftS'>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3601/3601695.png" alt="" />
                                    <span style={{ marginRight: 10 }}>
                                        FLASH DEAL
                                    </span>

                                </div>
                                <div className="timerRightS">
                                    {/* <div classname='salesEnd'  style={{marginRight:20}}>Sales Ends in 2 hours </div> */}
                                    <div className='clock11S'>
                                        <Clock />

                                    </div>
                                </div>

                            </div>
                            <div className="dataS">
                                <div className="priceS">
                                    <span className='labelS'>Price:</span><span className='price1'>&#8377;{data.offerPrice}</span><span className='price2'><s>&#8377;{data.strikedoffprice}</s></span><span className="price3">{randomOff()}OFF</span>
                                </div>
                                <div className="shipFromS">
                                    <span className="labelS">Ship From: </span><span className='shipName'>China</span>
                                </div>
                                <div className="qtyS">
                                    <span className="labelS">QTY:</span>
                                    <button className='counterS' onClick={remove}>-</button>
                                    <span className='counterBoxS'>{counter}</span>
                                    <button className='counterS' onClick={add}>+</button>
                                </div>
                            </div>
                            <div className="buttonsS">
                                <div onClick={() => Navigate('/cart')} className="buyNowS pointerS">Buy Now </div>
                                <div onClick={handleCart} className="addToCartS pointerS" >Add to Cart </div>
                                <div onClick={handleLike} className="wishListS pointerS">
                                    <img src={liked ? filledLike : unfilledLike} />
                                    <p className="wishTxtS">
                                        Add to WishList
                                    </p>
                                </div>

                            </div>
                            <div className="paypalS">
                                <span className="labelS">
                                    Payment:
                                </span>
                                <img src="https://cdn-icons-png.flaticon.com/128/196/196566.png" alt="" />
                            </div>


                        </div>
                    </div>

                }
                <Center>
                    <Button w='20rem' onClick={() => Navigate('/skincare')} colorScheme='telegram'><ArrowBackIcon boxSize='1.5rem' />Back to Product Page </Button>
                </Center>
                <div id="footerS">
                    <div className="fourS">
                        <img src="https://cdn-icons-png.flaticon.com/128/2438/2438078.png" alt="" />
                        <p className="textS">SECURE PAYMENTS</p>
                    </div>
                    <div className="fourS">
                        <img src="https://cdn-icons-png.flaticon.com/128/4766/4766928.png" alt="" />
                        <p className="textS">CASH ON DELIVERY</p>
                    </div>
                    <div className="fourS">
                        <img src="https://cdn-icons-png.flaticon.com/128/1212/1212158.png" alt="" />
                        <p className="textS">ASSURED QUALITY</p>
                    </div>
                    <div className="fourS">
                        <img src="https://cdn-icons-png.flaticon.com/128/2271/2271113.png" alt="" />
                        <p className="textS">EASY RETURNS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sdec