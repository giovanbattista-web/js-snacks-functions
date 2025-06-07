/*
function quadrato(num){
    let risultato=num*num;
    console.log(`il tuo quadrato è ${risultato}`);
}

function somma(a,b){
    let sum=a+b;
    console.log(`la somma è ${sum}`);
}
function restituisciSomma(a,b){ //input: a e b (i 2 numeri da sommare )
    let sum=a+b;
    return sum; // output : sum(il risultato)
    
}
*/

/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */
const userName = 'Mario';

// Dichiara la funzione qui.
function hello(fullName){
    return `Ciao ${fullName}`;
}

// Invoca la funzione qui e stampa il risultato in console
/* 
quadrato(3);
quadrato(4);
somma(3, 4);
let numero=parseInt(prompt("inserisci il numero"));
let numero2=parseInt(prompt("inserisci il secondo numero"));
somma(numero,numero2);
let sommaUtente= restituisciSomma(1, 3);
*/


console.log(hello(userName));


/*
let nome="Peppe";
let saluto1=saluta(nome);
console.log(saluto1);
*/

//Risultato atteso se si passa 'Mario': // ciao Mario
// let risultato1=isMario("Peppe"); //false
// console.log(risultato1);


