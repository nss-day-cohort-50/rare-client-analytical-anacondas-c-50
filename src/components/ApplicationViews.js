import React from "react";
import { Route } from "react-router-dom";
import { Tags } from "./UserViews/tags.js";
import { Categories } from "./UserViews/categories.js";
import { Posts } from "./UserViews/posts/post"
import { MyPosts } from "./UserViews/posts/myPosts.js";
import { NewPost } from "./UserViews/posts/createpost.js";

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>

            <Route path="/tags">
                <Tags />
            </Route>
            <Route path="/categories">
                <Categories />
            </Route>
            <Route path= "/Posts">
                <Posts />
            </Route>
            <Route path= "/myPosts">
                <MyPosts />
            </Route>
            <Route path= "/createpost">
                <NewPost />
            </Route>

        </main>
    </>
}
