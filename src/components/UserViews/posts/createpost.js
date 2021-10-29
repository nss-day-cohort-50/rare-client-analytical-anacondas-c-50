import React from "react"
import { useEffect, useState } from "react"
import {createPost, getAllPosts} from "../../ApiManager"


export const NewPost = () => {
    const [post, setPosts] = useState({
        title:"", 
        publication_date:"",
        content:"",
        category_id: "",
    })

    const handleControlledInputChange = (event) => {
        const newPost = Object.assign({}, post)          
        newPost[event.target.name] = event.target.value   
        setPosts(newPost)                                
    }

    useEffect(
        () => {
            getAllPosts()
                .then((data) => {
                    setPosts(data)
                })
        },
        []
    )

    const createNewPost = (e) => {
        e.preventDefault()
        const postContent = {
            user_id: parseInt(localStorage.getItem("rare_user_id")),
            title: post.title,
            publication_date: post.publication_date,
            content: post.content,
            category_id: post.category_id
        }

        return createPost(postContent)
    }

    return (
        <>
            <div className="inputBox"><h3>Create New Post</h3></div>
                <div><input type="text" name="title" placeholder="A cool title here!" value={post.title} onChange={handleControlledInputChange}></input></div>
                <div><input type="date" name="publication_date" value={post.publication_date} onChange={handleControlledInputChange}></input></div>
                <div><input type="text" name="content" placeholder="A cool content here!" value={post.content} onChange={handleControlledInputChange}></input></div>
                <div><input type="text" name="category_id" placeholder="A cool category_id here!" value={post.category_id} onChange={handleControlledInputChange}></input></div>
                <button onClick={createNewPost}>Save</button>
        </>
    )
}