import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import React from "react"
import { getMyPosts } from "../../ApiManager"

export const MyPosts = () => {
    const [posts, setPosts] = useState([])
    const userId = parseInt(localStorage.getItem("rare_user_id"))

    useEffect(
        () => {
                getMyPosts()
                .then((data) => {
                    setPosts(data)
                })
        },
        [userId]
    )

    return (
        <>
        <h3>My Posts</h3>
        {/* <Link className="nav-link" to="/myPosts"><button>Add Post</button></Link> */}
                <div className="posts__header">

                </div>
                
                {
                    posts.map(
                        (post) => {
                            return<h3 className="cards">

                                { 
                                (post.user.id === userId)  
                                ?
                                <ul className="posts" key={`post--${post.id}-${Math.random()}`}>
                                <ul className="post_name" >{post.user_id}</ul>
                                <ul className="post_category" >{post.category_id}</ul>
                                <ul className="post_title" >{post.title}</ul>
                                <ul className="post_date" >{post.publication_date}</ul>
                                <ul className="post_content" >{post.content}</ul>
                                </ul>
                                : null
                                }
                            </h3>
                        }
                    
                    )
                }
        </>
    )

}