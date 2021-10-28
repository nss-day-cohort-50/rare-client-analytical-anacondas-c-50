import React from "react"
import { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import "./categories.css"
import { getAllCategories, createCategory } from "../ApiManager"


export const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(
        () => {
            getAllCategories()
                .then((data) => {
                    setCategories(data)
                })
        },
        []
    )

    return (
        <>
            <div><h1 className="header">Categories</h1>
                {categories.map((category) => {
                    return <div className="catList"><ul><li className="cat">{category.label}</li></ul></div>
                })}</div>
            <div className="catBox newCat"><h3>Create New Category</h3>
                <div>
                </div><input type="text" placeholder="A cool new category..."></input><button onClick={createCategory}>Submit</button></div>

        </>
    )
}