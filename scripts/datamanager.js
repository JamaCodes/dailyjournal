let postCollection = [];

export const getPosts = () => {
    return fetch("http://localhost:8088/Posts?_expand=mood")
      .then(response => response.json())
      .then(parsedResponse => {
        postCollection = parsedResponse;
        return parsedResponse;
      })
  }


export const getMoods = () => {

    return fetch("http://localhost:8088/moods")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        postCollection = parsedResponse
        return parsedResponse;
    })
}




export const usePostCollection = () => {
    return postCollection;
}

export const createPost = postObj => {
    return fetch("http://localhost:8088/Posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
  
    })
        .then(response => response.json())

  }
//=============EDIT-Fetch================
  export const getSinglePost = (postId) => {
    return fetch(`http://localhost:8088/Posts/${postId}`)
      .then(response => response.json())
  }

  export const updatePost = postObj => {
    return fetch(`http://localhost:8088/Posts/${postObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
  
    })
        .then(response => response.json())
        
  }
  
  