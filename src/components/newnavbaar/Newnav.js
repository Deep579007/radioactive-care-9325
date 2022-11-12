import "./newnav.css";
import {Link, Navigate} from "react-router-dom"
const Newnav = () => {
 
  return (

    <div className='new_nav'>
      <div className='nav_data'>
        <div className='left_data'>
          <button >
           
          <Link to="/makeup">Makeup</Link>
            </button>
          <button >
           
          <Link to="/skincare">Skincare</Link>
            </button>
          <button >
           
          <Link to="/brush">Brush</Link>
            </button>
          {/* <select>
          <option>Makeup</option>
          <option>Lips</option>
          <option>Lipsticks</option>
          <option>Wonder Women Lipstick Range</option>
          <option>Lip Care</option>
          </select>
          
          
          <select>
          <option>Brushes</option>
          <option>Face Brushes</option>
          <option>Blend Trend Face Brush-001</option>
          <option>Blend Trend Face Brush-002</option>
          <option>Blend Trend Face Brush-003</option>
          <option>Blend Trend Face Brush-004</option>
          <option>Blend Trend Face Brush-005</option>
          </select>
          
          <select>
          <option>Skincare</option>
          <option>Moisturizer</option>
          <option>Sunscreen</option>
          <option>Masks</option>
          <option>Sheet Mask Combo</option>
          </select>
          
          <select>
          <option>Gifting</option>
          <option>Makeup Kits</option>
          <option>Sugar sets</option>
          <option>E-Gift Cards</option>
          <option>Value Sets</option>
          </select>
          
          <select>
          <option>Blog</option>
          <option>Feature</option>
          <option>Makeup</option>
          <option>Skincare</option>
          </select>
          
          <select>
          <option>Offers</option>
          </select>
          
          <select>
          <option>Stores</option>
          </select> */}
          
        </div>
      </div>
    </div>

  )
}

export default Newnav