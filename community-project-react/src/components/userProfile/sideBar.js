import React from 'react'
import "./sideBar.css"
import SideBarNav from "./sideBarNav"

function sideBar() {
    return (

        <div class="sidebar">
            <div class="card-body">
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