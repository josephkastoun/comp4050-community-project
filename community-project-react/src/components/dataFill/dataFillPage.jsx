import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { v4 as uuidv4 } from 'uuid';

class jobDataFill extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
            users : []
        };

        var user = []

        fetch('http://localhost:3200/users')
        .then( resp => resp.json())
        .then((data)=> {
            data.forEach((val, ind) => {
                user.push(val.guid)
            })
            this.setState({users: user})
        })
    }   



    // let price = req.query.price;
    // let location = req.query.location;

    submitData(event) {
        event.preventDefault();

        let url = new URL("http://localhost:3200/jobs?add=true")
        url.searchParams.set("id", this._id.value)
        url.searchParams.set("userID", this.userID.value)
        url.searchParams.set("jobStatus", this.jobStatus.value)
        url.searchParams.set("chosenUserId", this.chosenUserID.value)
        url.searchParams.set("title", this.title.value)
        url.searchParams.set("description", this.desc.value)
        url.searchParams.set("price", this.price.value)
        url.searchParams.set("location", this.location.value)

        fetch(url).then(this.jobid.value = uuidv4())


    }

    render() {
        return (
            <div style={{margin : "10px"}}>
                <form onSubmit={a => this.submitData(a)}>

                    <div className="form-group">
                        <label>_id</label>
                        <select className="form-control form-control-sm" id="job_idInput" ref={(input) => this._id = input}>
                            {this.state.users.map((val, ind) => (<option>{val}</option>))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>userID</label>
                        <input type="text" className="form-control" id="jobUserIDInput" ref={(input) => this.userID = input} placeholder="Enter User ID" disabled value={uuidv4()}/>
                    </div>

                    <div className="form-group">
                        <label>jobStatus</label>
                        <select className="form-control form-control-sm" id="jobStatusInput" ref={(input) => this.jobStatus = input}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>chosenUserID</label>
                        <input type="text" className="form-control" id="jobChosenUserIDInput" ref={(input) => this.chosenUserID = input} placeholder="Enter User ID" disabled value={uuidv4()}/>
                    </div>

                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" id="titleInput" ref={(input) => this.title = input} placeholder="Enter Title"/>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" id="descInput" ref={(input) => this.desc = input} placeholder="Enter Description"/>
                    </div>                   

                    <div className="form-group">
                        <label>Job Price</label>
                        <input type="number" className="form-control" id="priceInput" placeholder="Enter Price" ref={(input) => this.price = input}/>
                    </div>

                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" className="form-control" id="locationInput" placeholder="Enter Location" ref={(input) => this.location = input}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
        );
    }
}

export default jobDataFill;