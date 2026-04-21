// ⚔️ Sfida 1 – Mini sistema reale (tipo app)

// Simula questo flusso:

// login → carica profilo → carica post → carica commenti
// Regole:
// ogni funzione è una Promise
// ogni step usa il risultato del precedente
// ogni step ha tempo casuale
// possibilità di errore

function fakeFetch(url) {

    return new Promise((resolve, reject) => {
        let resp = "";
        if (url === "https://users/marco") {
            resolve(resp = { id: 1, name: "Marco", cognome: "Rossi" })
        } else if (url === "https://users/mario") {
            resolve(resp = { id: 2, name: "Mario", cognome: "Verdi" })
        } else {
            reject("nessun utente trovato !")
        }
    })



}




const login = prompt("Login:");

function CaricaProfilo() {
    const timer = Math.floor(Math.random() * 3) + 1;

    return new Promise((resolve, reject) => {
        console.log("Caricamento...");


        setTimeout(() => {
            fakeFetch(`https://users/${login}`)
                .then(resp => resolve(resp))
                .catch(reject)
        }, timer * 1000)

    })

}


CaricaProfilo().then(result => console.log(result)).catch(err => console.log(err))