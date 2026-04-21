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



//test

// Livello 1 – Basi delle Promise
// 🧩 Esercizio 1: Creare una Promise semplice

// Crea una funzione che restituisce una Promise che:

// dopo 2 secondi → risolve con "Operazione completata"
// usa resolve

function test1() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if ((Math.random()) > 0.5) {
                resolve("operazione completata !")
            } else {
                reject("qualcosa è andato storto !")
            }
        }, 2000)
    })
}

test1()
    .then(mess => console.log(mess))
    .catch(err => console.log(err))


//test 2
// risultato finale deve essere stampato
// partenza: 5
// operazioni:
// ×2 → -3 → +10

function operazione(operazione, n1, n2) {
    let result = null;
    return new Promise((resolve, reject) => {
        if (operazione === "moltiplicazione") {
            result = n1 * n2
            setTimeout(() => {
                resolve(result)
            }, 2000)
        } else if (operazione === "somma") {
            result = n1 + n2
            setTimeout(() => {
                resolve(result)
            }, 2000)
        } else {
            reject("indica operazione e numeri !")
        }

    })
}



operazione("moltiplicazione", 3, 1)
    .then(result => operazione("somma", result, -3))
    .then(result => operazione("somma", result, 10))
    .then(result => console.log(result))
    .catch(err => console.log(err))


//test 3 
// Livello 3 – Async reali (simulati)
// 🧩 Esercizio 5: Finta API

// Crea una funzione fakeFetch(url) che:

// dopo 1–3 secondi
// restituisce dati finti (tipo { nome: "Mario" })

// 👉 Usa Math.random() per il tempo


function fakeFetch(url) {
    const timer = Math.floor(Math.random() * 3) + 1;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                url,
                data: { nome: "Mario", cognome: "Rossi", eta: 20 }
            }, console.log(`tempo di risposta: ${timer} sec`))
        }, timer * 1000)
    })
}


fakeFetch(`link...`)
    .then(resp => console.log(resp))
