import { useEffect, useState } from "react"
import React from "react"
import { getMyPosts } from "../../ApiManager"

export const MyPosts = () => {
    const [myPosts, setMyPosts] = useState([])

    useEffect(
        () => {
                getMyPosts()
                .then((data) => {
                    setMyPosts(data)
                })
        },
        []
    )

    return (
        <>
        <h3>My Posts</h3>
                <div className="posts__header">

                </div>
                
                {
                    myPosts.map(
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