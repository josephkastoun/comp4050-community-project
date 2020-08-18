import React from 'react'
import "./userInfo.css"

function userInfo() {
    return (
        <div className="userinfo">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Hello Guest,</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div class="card-group">
                <div class="card">
                    <div class="card-header">
                        Account Information
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <h5>Contact Information</h5>
                                    <p>Guest</p>
                                    <p>Guest123@gmail.com</p>
                                    <a href="#" class="card-link">Change Contact Information</a>
                                </blockquote>
                            </div>
                        </div>  
                        <div class="col-sm-6">
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <h5>Address</h5>
                                    <p>123 sample st town</p>
                                    <a href="#" class="card-link">Change address</a>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Your Rating</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Feedback Ratings</h6>
                    <div>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-success btn-lg">10</button>
                        <button type="button" class="btn btn-secondary btn-lg">3</button>
                        <button type="button" class="btn btn-danger btn-lg">0</button>
                    </div>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-light btn-lg" disabled>Positive</button>
                        <button type="button" class="btn btn-light btn-lg" disabled>Neutral</button>
                        <button type="button" class="btn btn-light btn-lg" disabled>Negative</button>
                    </div>
                    
                </div>
            </div>
            <div class="card">
                <div class="card-body">

                </div>
            </div>

            

        </div>

        
    )
}

export default userInfo