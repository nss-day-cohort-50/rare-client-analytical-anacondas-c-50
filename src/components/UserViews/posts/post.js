import { useEffect, useState } from "react"
import React from "react"
import { getAllPosts } from "../../ApiManager"
import { Link } from "react-router-dom"
import { createComment } from "../../ApiManager"
import { getAllComments } from "../../ApiManager"


export const Posts = () => {
    const [posts, setPosts] = useState([])
    // const [newComments, setNewComments] = useState({
    //     post_id: posts.id,
    //     author_id: author_id === posts.user_id,
    //     content: "",
    //     created_on: "",
    // })
    // const [comments, setComments] = useState([])

    useEffect(
        () => {
            getAllPosts()
                .then((data) => {
                    setPosts(data)
                })
        },
        []
    )
    // useEffect(
    //     () => {
    //         getAllComments()
    //             .then((data) => {
    //                 setComments(data)
    //             })
    //     },
    //     []
    // )
    // const commentSetter = (event) => {
    //     const newComments = Object.assign({}, posts)
    //     comments[event.target.name] = event.target.value
    //     setNewComments(newComments)
    // }
    // const createNewComment = (e) => {
    //     e.preventDefault()
    //     const commentContent = {
    //         user_id: parseInt(localStorage.getItem("rare_user_id")),
    //         post_id: comments.id,
    //         author_id: comments.author_id === parseInt(localStorage.getItem("rare_user_id")),
    //         content: comments.content,
    //         created_on: comments.created_on
    //     }

    //     return createComment(commentContent)
    // }
    return (
        <>
            <h3>All Posts</h3>
            <div className="posts__header">
                <Link className="nav-link" to="/createpost"><button>Create Post</button></Link>
            </div>

            {
                posts.map(
                    (post) => {
                        return <h3 className="cards">
                            <ul className="posts" key={`post--${post.id}-${Math.random()}`}>
                                <ul className="post_name" >{post.user_id}</ul>
                                <ul className="post_category" >{post.category_id}</ul>
                                <ul className="post_title" >{post.title}</ul>
                                <ul className="post_date" >{post.publication_date}</ul>
                                <ul className="post_content" >{post.content}</ul>
                            </ul>
                            {/* <div className="post_comment">{comments.content}</div> */}
                            <div className="comment" ><input type ="text" placeholder="Neat post!"></input><button>Comment</button></div>
                        </h3>
                    }

                )
            }
        </>
    )
}