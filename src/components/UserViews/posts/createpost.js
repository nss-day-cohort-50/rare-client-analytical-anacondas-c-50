import React from "react"
import { useEffect, useState } from "react"
import { createPost, getAllPosts, getAllCategories } from "../../ApiManager"


export const NewPost = () => {
    const [categories, setCategory] = useState([])
    const [post, setPosts] = useState({
        title: "",
        publicationDate: "",
        content: "",
        categoryId: "",
        imageUrl: "",
        approved: true
    })

    const handleControlledInputChange = (event) => {
        const newPost = Object.assign({}, post)
        newPost[event.target.name] = event.target.value
        setPosts(newPost)
    }

    useEffect(
        () => {
            getAllCategories()
                .then((data) => {
                    setCategory(data)
                })
        },
        []
    )
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
            user: parseInt(localStorage.getItem("rare_user_id")),
            title: post.title,
            publicationDate: post.publication_date,
            content: post.content,
            categoryId: post.categoryId,
            imageUrl: "",
            approved: true
        }

        return createPost(postContent)
    }

    return (
        <>
            <div className="inputBox"><h3>Create New Post</h3></div>
            <div><input type="text" name="title" placeholder="A cool title here!" value={post.title} onChange={handleControlledInputChange}></input></div>
            <div><input type="date" name="publication_date" value={post.publication_date} onChange={handleControlledInputChange}></input></div>
            <div><input type="text" name="content" placeholder="A cool content here!" value={post.content} onChange={handleControlledInputChange}></input></div>
            <div><select name="categoryId" value={post.categoryId} onChange={(event) => handleControlledInputChange(event)}>
                <option value="0">Category</option>
                {
                    categories.map(category => <option value={category.id}>{category.label}</option>)
                }
            </select></div>
            <button onClick={createNewPost}>Save</button>
        </>
    )
}