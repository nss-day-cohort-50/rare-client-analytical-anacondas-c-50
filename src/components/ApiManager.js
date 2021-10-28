export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts")
        .then(res => res.json())
}

export const getAllTags = () => {
    return fetch("http://localhost:8088/tags")
        .then(res => res.json())
}

export const setNewTags = (label) => {
    return fetch("http://localhost:8088/tags", {
        method: "POST",
        body: JSON.stringify({
            label: label
        }),
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(response => response.json())
        .then(json => console.log(json))
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

export const getMyPosts = () => {
    return fetch("http://localhost:8088/posts?userId=${userId}&_expand=user")
        .then(res => res.json())
}






