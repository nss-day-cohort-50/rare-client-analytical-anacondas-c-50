import React from "react"
import { Route } from "react-router-dom"
import "./categories.css"

export const Categories = () => {

    return (
        <>
        <div><h1 className="header">Categories</h1>
        <div className="catList"><ul><li className="cat">Cool Categories Bro</li></ul></div></div>

        <div className="catBox newCat"><h3>Create New Category</h3>
        <div>
            </div><input type="text" placeholder="A cool new category..."></input><button>Submit</button></div>
            
        </>
    )
}