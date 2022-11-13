import "./newnav.css";
import {Link} from "react-router-dom"
const Newnav = () => {
 
  return (

    <div className='new_nav'>
      <div className='nav_data'>
        <div className='left_data'>
          <button >
           
          <Link style={{color:"white"}} to="/makeup">Makeup</Link>
            </button>
          <button >
           
          <Link style={{color:"white"}} to="/skincare">Skincare</Link>
            </button>
          <button >
           
          <Link style={{color:"white"}} to="/brush">Brush</Link>
            </button>
            <button >
           
          <Link style={{color:"white"}} to="/">Gifting</Link>
            </button>
            <button >
           
          <Link style={{color:"white"}} to="/">Blog</Link>
            </button>
            <button >
           
          <Link style={{color:"white"}} to="/">Offers</Link>
            </button>
            <button >
           
          <Link style={{color:"white"}} to="/">Stores</Link>
            </button>
          
          
        </div>
      </div>
    </div>

  )
}

export default Newnav