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

export const deleteTags = () => {
    return fetch("http://localhost:8088/tags", {
        method: "DELETE",
        body: JSON.stringify({
            
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


export const createCategory = (label) => {
    return fetch("http://localhost:8088/categories", {
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



export const getMyPosts = (user_Id) => {
    return fetch(`http://localhost:8088/posts?userId=${user_Id}`)
        .then(res => res.json())
}






