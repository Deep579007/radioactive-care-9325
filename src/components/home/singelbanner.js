import React from 'react'
import "react-multi-carousel/lib/styles.css";



const Singlebanner = () => {
    return (
        <div style={{ height: "520px" }} className='products_section'>
            <div className='products_deal'>
                <h2 style={{ textAlign: "center", color: "black" }}>SHUKAR HAI, SUGAR HAI!</h2>
            </div>
            <div>
                <img style={{margin:"auto",display:"block",borderRadius:"20px",height:"440px",width:"75%"}} 
                src='https://d32baadbbpueqt.cloudfront.net/Homepage/b16a42b1-3e35-42bb-b122-a517e75c490e.jpg' alt=''/>
            </div>
            
        </div>
    )
}

export default Singlebanner

export const Singlebanner2 = () => {
    return (
        <div style={{ height: "520px" }} className='products_section'>
            <div className='products_deal'>
                <h2 style={{ textAlign: "center", color: "black" }}>REFER YOUR FRIENDS</h2>
            </div>
            <div>
                <img style={{margin:"auto",display:"block",borderRadius:"20px",height:"400px",width:"90%"}}
                 src='https://d32baadbbpueqt.cloudfront.net/Homepage/8bfe8bb4-002d-4097-a773-6af33325a594.jpg' alt=''/>
            </div>
            
        </div>
    )
}

