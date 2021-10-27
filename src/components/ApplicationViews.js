<<<<<<< HEAD
import React from "react";
import { Route } from "react-router-dom";
import { Tags } from "./UserViews/tags.js";
import { Categories } from "./UserViews/categories.js";
=======
import React from "react"
import { Route } from "react-router-dom"
import { Posts } from "./posts/post"
>>>>>>> main

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
<<<<<<< HEAD
            <Route path="/tags">
                <Tags />
            </Route>
            <Route path="/categories">
                <Categories />
            </Route>
=======
        <Route path= "/posts">
            <Posts />
        </Route>
>>>>>>> main
        </main>
    </>
}
