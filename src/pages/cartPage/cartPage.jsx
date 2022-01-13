import React from 'react'
import Cart from '../../components/Cart/Cart'

function CartPage(props) {
    return (
        <div>
            <Cart setLoggedUser={props.setLoggedUser}/>
        </div>
    )
}

export default CartPage
