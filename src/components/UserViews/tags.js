import React from "react"
import "./tags.css"
import { getAllTags } from "../ApiManager.js"
import { setNewTags } from "../ApiManager.js";
import { useState, useEffect } from 'react'
// import { useHistory } from "react-router";

export const Tags = () => {
    const [tags, setTags] = useState([])
    const [newTag, setCreateTags] = useState([])
    // const history = useHistory()
    useEffect(
        () => {
                getAllTags()
                .then((data) => {
                    setTags(data)
                })
        },
        []
    )
    
    

    const submitNewTag = (e) => {
        e.preventDefault()

        return setNewTags(newTag)
        .then(() => {
            return tags
        })
    }
        
        
    

    return (
        <>
        <div><h1 className="header">Tags</h1>
        {tags.map(
            (tag) => {
            return (
                <div className="tagList"><ul><li className="tag">{tag.label}</li></ul></div>)})}
                </div>

        <div className="tagBox newTag"><h3>Create New Tag</h3>
        <div>
            </div><input type="text" placeholder="A cool new tag..." onChange={evt => setCreateTags(evt.target.value) }></input><button onClick={submitNewTag}>Submit</button></div>
            
        </>
    )
}