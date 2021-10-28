import React from "react"
import "./tags.css"
import { getAllTags } from "../ApiManager.js"

export const Tags = () => {
    const [tags,setTags] = useState([])

    useEffect(
        () => {
                getAllTags()
                .then((data) => {
                    setTags(data)
                })
        },
        []
    )
    return (
        <>
        <div><h1 className="header">Tags</h1>
        {tags.map((tag) => {
            return
        <div className="tagList"><ul><li className="tag">{tag.label}</li></ul></div>})}</div>

        <div className="tagBox newTag"><h3>Create New Tag</h3>
        <div>
            </div><input type="text" placeholder="A cool new tag..."></input><button>Submit</button></div>
            
        </>
    )
}