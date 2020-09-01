import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';



class info extends Component {

    render() {

        const name = "Guest"
        const balance = 100
        const rating = 4.5

        return (
            <div>
                <br></br>
                <h5>Hello {name},</h5>
                <p>
                    Welcome to your Dashboard. Here you can see account details including money remaining, your rating, current jobs, active listings and your history.
                </p>
                <h6>Money Remaining:</h6>
                <p>$ {balance}</p>
                <h6>Your Rating:</h6>
                <p>{rating} / 5</p>
                <br></br>
            </div>
        );
    }
}

export default info;