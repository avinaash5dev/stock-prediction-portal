import React from 'react'

function Register() {
    return (
        <div className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "80vh", backgroundColor: "#1f2428" }}>

            <div
                className="card p-3 text-light"
                style={{
                    width: "100%",
                    maxWidth: "420px",
                    backgroundColor: "#2b3035",
                    borderRadius: "12px",
                }}
            >
                <h3 className="text-center mb-4">Create Account</h3>
                <form action="">
                    {/* Username */}

                    <div className="mb-3">
                        <label className="form-label text-secondary">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control bg-dark text-light border-secondary"
                            placeholder="Enter username"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label className="form-label text-secondary">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control bg-dark text-light border-secondary"
                            placeholder="Enter email"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="form-label text-secondary">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control bg-dark text-light border-secondary"
                            placeholder="Enter password"
                        />
                    </div>


                    <button type='submit' className="btn btn-info w-100">
                        Register
                    </button>
                </form>

                <p className="text-center text-secondary mt-3 mb-0">
                    Already have an account?{" "}
                    <span className="text-info" style={{ cursor: "pointer" }}>
                        Login
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Register