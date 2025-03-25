/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */




// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

function capitalizeText(text){
    let capitalizedWords =[];
    let words=text.split('');
    for(let i=0;i<words.length;i++){
        const firstLetter = words[i].charAt(0).toUpperCase();
        const restOfWord = words[i].substring(1);
        console.log(firstLetter, restOfWord);

        const capitalizedWord = firstLetter+restOfWord;
        capitalizedWords.push(capitalizedWords);

    }
    return capitalizedWords.join('');
}
const phrase =capitalizeText("Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra");
console.log(phrase);

capitalizeText(text);