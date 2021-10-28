export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts")
        .then(res => res.json())
}

<<<<<<< HEAD
export const getAllTags = () => {
    return fetch("http://localhost:8088/tags")
        .then(res => res.json())
}
=======
export const getAllCategories = () => {
    return fetch("http://localhost:8088/categories")
        .then(res => res.json())
}

// export const setNewCategory = () => {
//     return fetch("http://localhost:8088/categories", {
//         method: "POST" })
//         .then(res => res.json())
//         .then(data => setCategoryId(data.id));
// }
>>>>>>> ab6ab35018da3685d17f28ad2511f58f563de161
