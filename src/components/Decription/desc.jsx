import React,{useState,useEffect} from 'react'
import './desc.css'
import Clock from './timer'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Center, Spinner,Button} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

function Desc() { 
    const Navigate= useNavigate()
    const {id} = useParams()
    const[data,setdata] = useState({})
    // console.log(data1)
  
    useEffect(()=>{
        axios.get(`https://render-mock-server.onrender.com/brush/${id}`)
        .then(res => {
            console.log(res)
            setdata(res.data)
        })
    },[])

    const unfilledLike = "https://cdn-icons-png.flaticon.com/128/535/535285.png"
    const filledLike = "https://cdn-icons-png.flaticon.com/128/7299/7299756.png"

    function randomOff(){
        // let off = Math.floor(Math.random()*10)+10
        let offNew = 15 + "%"
        return offNew
}

    const[timer,setTimer] = useState({
        h1:0,
        m1:0,
        s1:0
    })

    const[counter,setcounter] = useState(1)

    function add(){
        if(counter<10){
          setcounter(prev=>prev+1)
        }
    }

    function remove(){
        if(counter>0){
            setcounter(prev=>prev-1)
        }
    }

    const[liked,setliked] = useState(false)

    function handleCart(){
        axios.post("https://render-mock-server.onrender.com/cart",data)
        .then(res=>{
            // console.log(res)
        })
        .catch(err=>{
            // console.log("postCartObjError")
        })
        setTimeout(() => {
            Navigate('/cart')
          }, 1000);
    }

    function handleLike(){
        setliked(prev=>!prev)
        axios.post("https://render-mock-server.onrender.com/wish",data)
        .then(res=>{
            // console.log(res)
        })
        .catch(err=>{
            // console.log("postWishListObjError")
        })
        setTimeout(() => {
            Navigate('/wish')
        }, 1000);
    }

  const lenObj = Object.keys(data).length
  return (
    <div className='biggyB'>
        <div className='mainB'>
            <img className='headerImgB' src="https://img.gkbcdn.com/s3/bn/2205/1500x125-6271031b2b40c930d0488be9.jpg" alt="" />
                {lenObj===0 ?

                    <Center>

                        <Spinner size='xl' color='red.500' />

                    </Center>
                    :
                    <div className="subMainB">
                    <div className="mainImgBoxB">
                    <img  src={data.image} alt="watch" />
                    </div>
                    <div  className="rightMainB">
                    <p className='titleB'>{data.title}</p>
                        <div className='forSpansB'>
                        <span>Brand: <span>{data.cat}</span> </span>
                            <span>Item Code: <span>345617</span>
                            </span>
                        </div>
                        <div className='timerB'>
                            <div className='timerLeftB'>
                                <img src="https://cdn-icons-png.flaticon.com/128/3601/3601695.png" alt="" />
                                <span style={{marginRight:10}}>
                                    FLASH DEAL
                                </span>
    
                            </div>
                            <div className="timerRightB">
                             {/* <div classname='salesEnd'  style={{marginRight:20}}>Sales Ends in 2 hours </div> */}
                             <div className='clock11B'>
                               <Clock />
    
                             </div>
                            </div>
    
                        </div>
                        <div className="dataB">
                            <div className="priceB">
                            <span className='labelB'>Price:</span><span className='price1'>&#8377;{data.offerPrice}</span><span className='price2'><s>&#8377;{data.strikedoffprice}</s></span><span className="price3">{randomOff()}OFF</span>
                            </div>
                            <div className="shipFromB">
                                <span className="labelB">Ship From: </span><span className='shipName'>China</span>
                            </div>
                            <div className="qtyB">
                                <span className="labelB">QTY:</span>
                                <button className='counterB' onClick={remove}>-</button>
                                <span className='counterBoxB'>{counter}</span>
                                <button className='counterB' onClick={add}>+</button>
                            </div>
                        </div>
                        <div className="buttonsB">
                                <div onClick={()=>Navigate('/cart')} className="buyNowB pointerB">Buy Now </div>
                                <div onClick={handleCart} className="addToCartB pointerB" >Add to Cart </div>
                                <div onClick={handleLike} className="wishListB pointerB">
                                    <img src={liked ? filledLike : unfilledLike} />
                                    <p className="wishTxtB">
                                        Add to WishList
                                    </p>
                                </div>
                                
                        </div>
                        <div className="paypalB">
                            <span className="labelB">
                                Payment:
                            </span>
                            <img src="https://cdn-icons-png.flaticon.com/128/196/196566.png" alt="" />
                        </div>
                       
    
                    </div>
                </div>
                
                }
                     <Center>
                     <Button w='280px' onClick={()=>Navigate('/brush')} colorScheme='telegram'><ArrowBackIcon boxSize='20px' />Back to Product Page </Button>
                     </Center>
            <div className="footerB">
       <div className="fourB">
           <img src="https://cdn-icons-png.flaticon.com/128/2438/2438078.png" alt=""/>
           <p className="textB">SECURE PAYMENTS</p>
       </div>
       <div className="fourB">
        <img src="https://cdn-icons-png.flaticon.com/128/4766/4766928.png" alt=""/>
        <p className="textB">CASH ON DELIVERY</p>
    </div>
    <div className="fourB">
        <img src="https://cdn-icons-png.flaticon.com/128/1212/1212158.png" alt=""/>
        <p className="textB">ASSURED QUALITY</p>
    </div>
    <div className="fourB">
        <img src="https://cdn-icons-png.flaticon.com/128/2271/2271113.png" alt=""/>
        <p className="textB">EASY RETURNS</p>
    </div>
          </div>
        </div>
        </div>
  )
}

export default Desc