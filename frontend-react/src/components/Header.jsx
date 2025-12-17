import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Header = () => {
    return (
        <>

            <nav className="navbar navbar-dark bg-dark px-4">
                <Link className="navbar-brand mb-0 h1" to="/">
                    Stock Prediction Portal
                </Link>

                <Button text='Login' url='/login' />
                <Button text='Register' url='/register' />
            </nav>

        </>
    )
}

export default Header