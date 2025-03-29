/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filteredByInitial(array,letter){
    // DICHIARO UNA VARIABILE ARRAY VUOTO CHE CONTERRA' LE PAROLE CHE AVRANNO QUELLA LETTERA
    const filtered =[];
    for (let i = 0; i < array.length; i++){
        // CONTROLLO CHE LA LETTERA PASSATA SIA PRESENTE NEL NOME CHE STO ATTUALMENTE CICLANDO
        if (array[i][0].toLowerCase() === letter.toLowerCase()){
            // SE è VERA LA CONDIZIONE PUSHO IL NOME NELL'ARRAY filtered
            filtered.push(array[i]);
        }
    }
    return filtered;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filteredByInitial(names, 'a'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]