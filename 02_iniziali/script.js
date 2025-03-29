/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function getInitials(array) {
    // DICHIARO UNA VARIABILE, ARRAY VUOTO CHE CONTERRA' LE INIZIALI DEI NOMI PRESENTI NELL'ARRAY PASSATO 
    const initials = [];
    // CICLO L'ARRAY (PARAMETRO)
    for (let i = 0; i < array.length; i++) {
        // VADO A METTERE ALL'INTERNO DI initials LA PRIMA LETTERA DEL NOME ATTUALMENTE CICLATO
        let name = array[i];
        let firstLetter = name[0];
        initials.push(firstLetter);
    }
    return initials;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

