export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts")
        .then(res => res.json())
}

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
