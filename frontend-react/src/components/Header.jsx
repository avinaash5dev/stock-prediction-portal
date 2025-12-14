import React from 'react'

const Header = () => {
    return (
        <>

            <nav className="navbar navbar-dark bg-dark px-4">
                <span className="navbar-brand mb-0 h1">
                    Stock Prediction Portal
                </span>

                <div>
                    <button className="btn btn-outline-info me-2">
                        Login
                    </button>
                    <button className="btn btn-info">
                        Register
                    </button>
                </div>
            </nav>

        </>
    )
}

export default Header