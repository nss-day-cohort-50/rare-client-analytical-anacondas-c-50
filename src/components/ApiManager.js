export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts")
        .then(res => res.json())
}

export const getAllTags = () => {
    return fetch("http://localhost:8088/tags")
        .then(res => res.json())
}