import React from 'react'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import "./checkoutPage.css"
import Coupon from "../../components/Coupon/coupon"
function CheckoutPage({setLoggedUser}) {
    return (
        <div className='checkout-page-container'>
            <CheckoutForm setLoggedUser={setLoggedUser} />
            <Coupon />
        </div>
    )
}

export default CheckoutPage
