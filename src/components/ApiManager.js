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


export const createCategory = () => {
    
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch("http://localhost:8088/categories", fetchOption)
        .then(res => res.json())
}



