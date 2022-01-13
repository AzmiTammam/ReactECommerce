import React from 'react'
import Register from '../../components/Register/register'

function RegisterPage(props) {
    return (
        <div>
            <Register setLoggedUser={props.setLoggedUser}/>
        </div>
    )
}

export default RegisterPage
