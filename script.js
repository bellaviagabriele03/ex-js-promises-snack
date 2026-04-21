// https://dummyjson.com/posts/{id}


// fetch(`https://dummyjson.com/posts/1`)
// .then(Response => Response.json())
// .then(data => console.log(data))

//SNACK 1 ///////
function getPostTitle(id) {
    return new Promise((resolve, rejected) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(rejected)
    })
}


getPostTitle(1)
    .then(obj => console.log(obj))
    .catch(error => console.error(error))
