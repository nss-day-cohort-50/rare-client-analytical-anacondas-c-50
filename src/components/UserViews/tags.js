import React from "react"
import ReactTable from "react-table";  

import "./tags.css"

export const Tags = () => {
    

    return (
        <>
        <div><h1 className="header">Tags</h1>
        <div className="tagList"><ul><li className="tag">Cool Tags Bro</li></ul></div></div>

        <div className="tagBox newTag"><h3>Create New Tag</h3>
        <div>
            </div><input type="text" placeholder="A cool new tag..."></input><button>Submit</button></div>
            
        </>
    )
}