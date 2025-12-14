import React from 'react'

const Home = () => {
    return (
        <div className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "75vh", backgroundColor: "#1f2428" }}>

            <div className="card text-center text-light p-4"
                style={{ maxWidth: "750px", backgroundColor: "#2b3035" }}>

                <h2 className="mb-3">Stock Prediction App</h2>

                <p className="text-secondary">
                    This stock prediction application utilizes machine learning techniques,
                    specifically employing Keras, TensorFlow, and LSTM models, integrated
                    within the Django framework. It forecasts future stock prices by analyzing
                    100-day and 200-day moving averages, essential indicators widely used by
                    stock analysts to inform trading and investment decisions.
                </p>

                <div className="mt-3">
                    <button className="btn btn-info px-4">
                        Login now
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Home