// definisco l'array dei 5 numeri casuali
var array = createNumRandomOrderArray(1,5)
console.log(array);

// prendo l'elemento dove fare comparire questi numeri
const messaggio = document.getElementById("numbers")

// compongo il messaggio che compare all'inizio
messaggio.innerHTML += `ricordati questi numeri: ${array}`;

setTimeout (removeClass,29999);
setTimeout (chiedereNumeri,30000)







// creo la funzione per generare numeri random entro un min max

function RandomMinMax (numMin, numMax) {
    return Math.floor(Math.random() * (numMax - numMin + 1) + numMin );
    
}
// Array in ordine casuale
function createNumRandomOrderArray(min, max) {
   const intArray= [];

   while (intArray.length<max) {

       const nuovoNum = RandomMinMax(1,100)
       if (!intArray.includes(nuovoNum)){
           intArray.push(nuovoNum)
       }
   }

   return intArray
}

// creo la funzione che fa scomparire i numeri
var ArrayNumeriDati = []    
function removeClass () {
    messaggio.classList.add ("block");
         
    }

    function chiedereNumeri () {
        for (i=0; i<array.length;i++) {
            let indovinaNumero = parseInt(prompt ("Scrivi un numero che ti ricordi")) 
            ArrayNumeriDati.push(indovinaNumero)
            
            console.log(ArrayNumeriDati);
          
        }

        if (array.toString() === ArrayNumeriDati.toString()) {
            messaggio.classList.remove("block")
            messaggio.innerHTML = `Congratulazioni hai vinto`;
            
        }
        
        else {
            messaggio.classList.remove("block")
            messaggio.innerHTML = `Mi dispiace hai perso`;
            
        }
    
       
    }