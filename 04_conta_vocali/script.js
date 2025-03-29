/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(string){
    // DICHIARO UN ARRAY VOCALI E UNA VARIABILE CONTATORE  
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < string.length; i++){
        // CONTROLLO SE ALL'INTERNO DELL'ARRAY E' PRESENTE LA LETTERA CHE STO ATTUALMENTE CICLANDO DELLA STRINGA
        if (vowels.includes(string[i])){
        // SE E' VERA LA CONDIZIONE, CIOE' CHE LA LETTERA CHE STO CICLANDO SI TROVI DENTRO L'ARRAY vowels ALLORA 
        // AUMENTO IL CONTATORE DI 1
        count++;
        }
    }
    return count;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)