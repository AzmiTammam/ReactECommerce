import React,{useState} from 'react'
import "./CartDropdown.css"
import { Link } from 'react-router-dom'
import CartDropDownItem from '../cartDropdownItem/cartDropdownItem'

const CartDropdown = (props) => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("loggedUser")));
    
    return (
        <div className="cart-dropdown">
        <div className="cart-items" >
            {user.cartItems.length ? user.cartItems.map(cartItem => <CartDropDownItem  key={cartItem.id} item={cartItem} />) : <span className="empty-message">Noting in Cart</span>}
        </div>
        <Link to="/cart" onClick={props.handleHidden} className='go-to-cart'><button type="button">
            Cart
        </button></Link>
    </div>
    )
}

export default CartDropdown
