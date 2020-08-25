import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class info extends Component {
    render() {
        return (
            <div>
                <h5>Hello Guest,</h5>
                <p>
                    Welcome to your Dashboard. Here you can see account details including money remaining, your rating, current jobs, active listings and your history.
                </p>
                <h6>Money Remaining:</h6>
                <p>$100.00</p>
                <h6>Your Rating:</h6>
                <a href="#">4.5 / 5</a>
                <br></br>
            </div>
        );
    }
}

export default info;