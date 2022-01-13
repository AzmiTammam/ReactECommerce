import React from 'react'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import "./checkoutPage.css"

function CheckoutPage({setLoggedUser}) {
    return (
        <div className='checkout-page-container'>
            <CheckoutForm setLoggedUser={setLoggedUser} />
        </div>
    )
}

export default CheckoutPage
