import React from "react"
import { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import "./categories.css"
import { getAllCategories, getAllPosts } from "../ApiManager"


export const Categories = () => {
    const [categories, setCategories] = useState([])
    // const [newCategories, setNew] = useState([])

    useEffect(
        () => {
                getAllCategories()
                .then((data) => {
                    setCategories(data)
                })
        },
        []
    )

    const [posts, setPosts] = useState([])

    useEffect(
        () => {
                getAllPosts()
                .then((data) => {
                    setPosts(data)
                })
        },
        []
    )

    console.log(categories)
    // useEffect(() => {
    //     // POST request using fetch inside useEffect React hook
    //     const newCategory = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ label: '' })
    //     };
    //     setNewCategory(setNew)
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
    // // console.log(categories)
    // console.log(newCategories)

    return (
        <>
        <div><h1 className="header">Categories</h1>
        {categories.map((category) => { 
        return <div className="catList"><ul><li className="cat">{category.label}</li></ul></div>})}</div>
        <div className="catBox newCat"><h3>Create New Category</h3>
        <div>
            </div><input type="text" placeholder="A cool new category..."></input><button>Submit</button></div>
            
        </>
    )
}