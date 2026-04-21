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
    .catch(error => console.error(error));




function lanciaDado() {
    return new Promise((resolve, rejected) => {
        console.log("Sto lanciando il dado...")

        setTimeout(() => {
            const dado = Math.floor(Math.random() * 6) + 1;
            resolve(dado)
            rejected("errore")
        }, 3000)
    })
}

lanciaDado().then(dado => console.log("numero uscito:", dado)).catch(message => console.log(message))


