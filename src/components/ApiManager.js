export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts")
        .then(res => res.json())
}











export const getMyPosts = () => {
    return fetch("http://localhost:8088/posts/${userId}")
        .then(res => res.json())
}