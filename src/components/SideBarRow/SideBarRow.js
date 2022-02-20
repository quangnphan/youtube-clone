import React from "react";
import "./SideBarRow.css"

const SideBarRow = ({selected,title,Icon}) => {
    return(
        <div className={`sidebarrow ${selected ? 'selected' : ''}`}>
            <Icon className="sidebarrow-icon"/>
            <h2 className="sidebarrow-title">{title}</h2>
        </div>
    )
}

export default SideBarRow;