import { useEffect, useState } from "react"
import React from "react"
import { getAllPosts } from "../../ApiManager"
import { Link} from "react-router-dom"


export const Posts = () => {
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

    return (
        <>
            <h3>All Posts</h3>
                <div className="posts__header">
                <Link className="nav-link" to="/createpost"><button>Create Post</button></Link>
                </div>
                
                {
                    posts.map(
                        (post) => {
                            return<h3 className="cards">
                                <ul className="posts" key={`post--${post.id}-${Math.random()}`}>
                                <ul className="post_name" >{post.user_id}</ul>
                                <ul className="post_category" >{post.category_id}</ul>
                                <ul className="post_title" >{post.title}</ul>
                                <ul className="post_date" >{post.publication_date}</ul>
                                <ul className="post_content" >{post.content}</ul>
                                </ul>
                            </h3>
                        }
                    
                    )
                }
        </>
    )
}