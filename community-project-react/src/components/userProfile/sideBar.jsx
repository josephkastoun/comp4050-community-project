import React from 'react'
import "./sideBar.css"
import SideBarNav from "./sideBarNav"

function sideBar() {
    return (

        <div className="sidebar">
            <div className="card-body">
                <SideBarNav title="Account Information" />
                <SideBarNav title="Change Personal Information" />
                <SideBarNav title="Current Jobs" />
                <SideBarNav title="History" />
                <SideBarNav title="Sign Out" />
            </div>
        </div>

    )
}

export default sideBar