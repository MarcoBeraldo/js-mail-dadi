// Mail
// Crea (inventa) una lista di inidirizzi mail autorizzati.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);

// creo l'array di email
const emails = ["pinco@pallo.it", "pallo@pinco.it", "pinco@pallino.it"];
// la stampo in console
console.table(emails)

// chiedo la mail all'utente
let mail = prompt('Inserisci l\'indirizzo email')

// se la mail è presente nell'array stampo "ha accesso" in console, se non c'è stampo "non ha accesso"
if (emails.includes(mail)) {
    console.log("ha accesso");
} else console.log("non ha accesso")


console.log("*******************************************************************")

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)


// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


// genero un numero a caso da 1 a 6 per l'utente
const userNumber = parseInt(Math.floor(Math.random() * (6 - 1 + 1) + 1));
console.log('Il tuo numero: ' + userNumber)

// genero un numero a caso da 1 a 6 per il computer
const pcNumber = parseInt(Math.floor(Math.random() * (6 - 1 + 1) + 1));
console.log('Il numero del pc: ' + pcNumber)

// verifico il vincitore
if (userNumber > pcNumber) {
    console.log('Hai vinto!');
} else if (pcNumber > userNumber) {
    console.log('Hai perso!');
} else console.log('Pareggio!')