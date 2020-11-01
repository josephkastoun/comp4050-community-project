import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

class jobDataFill extends Component {

    constructor(props) {
        super(props);
        this.inputType = 0;
    }   


    componentDidMount(){
        fetch('http://localhost:3200/jobs?fetch=true&userID=' + this.props.userID)
            .then( resp => resp.json())
            .then((data)=> {
                    this.setState({
                        jobs: data
                    })
            })
    }


    // let price = req.query.price;
    // let location = req.query.location;

    submitData(event) {
        event.preventDefault();

        let url = new URL("http://localhost:3200/jobs?" + (this.inputType.value == "Edit" ? "replace" : "add") + "=true")
        if(this.inputType.value == "Edit"){
            url.searchParams.set("replaceID", this.replaceID)
        }
        url.searchParams.set("userID", this.props.userID)
        url.searchParams.set("jobStatus", this.jobStatus.value)
        url.searchParams.set("chosenUserID", this.chosenUserID.value ? this.chosenUserID.value : "null")
        url.searchParams.set("title", this.title.value)
        url.searchParams.set("description", this.desc.value)
        url.searchParams.set("price", this.price.value)
        url.searchParams.set("location", this.location.value)

        fetch(url.href).then(() =>
            {
                fetch('http://localhost:3200/jobs?fetch=true&userID=' + this.props.userID)
                .then( resp => resp.json())
                .then((data)=> {
                        this.setState({
                            jobs: data
                        })
                })
            }
        )
    }

    updateVariables(){
        var job = this.state.jobs.find(a => a._id === this.jobSelection.value);
        this.replaceID = job._id;
        this.jobStatus.value = job.jobStatus;
        this.chosenUserID.value = job.chosenUserID;
        this.title.value = job.title;
        this.desc.value = job.description;
        this.price.value = job.price;
        this.location.value = job.location;
    }

    render() {
        return (
            <div style={{margin : "10px"}}>
                <Link to={"dashboard"} >{"<- Return to Dashboard"}</Link>

                <form onSubmit={a => this.submitData(a)}>

                    <div className="form-group">
                        <label>Type</label>
                        <select className="form-control form-control-sm" id="inputType" ref={(input) => this.inputType = input} onChange={e => {this.forceUpdate()}}>
                            <option>Add</option>
                            <option>Edit</option>
                        </select>
                    </div>


                    {this.inputType.value == "Edit" &&  (
                        <div className="form-group">
                            <label>Type</label>
                            <select className="form-control form-control-sm" id="inputType" ref={(input) => this.jobSelection = input} onClick={e => {this.updateVariables()}}>
                            {this.state.jobs.map(job => (<option key={job._id}>{job._id}</option>))}
                            </select>
                        </div>)
                    }

                    <div className="form-group">
                        <label>userID</label>
                        <input type="text" className="form-control" id="jobUserIDInput" ref={(input) => this.userID = input} placeholder="Enter User ID" disabled value={this.props.userID}/>
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
                        <input type="text" className="form-control" id="jobChosenUserIDInput" ref={(input) => this.chosenUserID = input} placeholder="Enter User ID"/>
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

                    <button type="submit" className="btn btn-primary">{this.inputType.value == "Edit" ? "Edit Variable" : "Submit"}</button>

                </form>
            </div>
        );
    }
}

export default jobDataFill;