/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const fullName = 'Mario';


/* Dichiara la funzione qui.
function dayTime(string){
    
    // RECUPERO IL GIORNO ODIERNO ED IL MOMENTO ATTUALE PER ANDARE POI A RECUPERARE L'ORA ATTUALE
    const day = new Date();
    const hours = day.getHours();
    
    // CONTROLLA IL VALORE DI hours
    if (hours <13){
        console.log (`Buongiorno ${string}`);
    }
    else if (hours <7){
        console.log (`Buon pomeriggio ${string}`);
    }
    else {
        console.log (`Buona sera ${string}`);
    }

}
*/ 

// ARROW FUNCTION DELLA FUNZIONE PRECEDENTE 
const dayTime = (string) =>{
    
    // RECUPERO IL GIORNO ODIERNO ED IL MOMENTO ATTUALE PER ANDARE POI A RECUPERARE L'ORA ATTUALE
    const day = new Date();
    const hours = day.getHours();
    
    // CONTROLLA IL VALORE DI hours
    if (hours <13){
        console.log (`Buongiorno ${string}`);
    }
    else if (hours <7){
        console.log (`Buon pomeriggio ${string}`);
    }
    else {
        console.log (`Buona sera ${string}`);
    }
}

// Invoca la funzione qui e stampa il risultato in console
dayTime(fullName);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.