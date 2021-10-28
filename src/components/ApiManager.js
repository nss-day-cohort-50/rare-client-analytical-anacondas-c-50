export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts")
        .then(res => res.json())
}











export const getMyPosts = () => {
    return fetch("http://localhost:8088/posts?userId=${userId}&_expand=user")
        .then(res => res.json())
}