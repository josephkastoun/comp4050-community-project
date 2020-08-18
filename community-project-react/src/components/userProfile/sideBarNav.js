import React from 'react'
import './sideBarNav.css'


function sideBarNav({ title }) {
    return (
        <div className="sidebarnav">
            <h2 className="titles">{title}</h2>
        </div>
    );
}

export default sideBarNav