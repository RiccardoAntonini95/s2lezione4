/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* function area(l1, l2){
  return l1*l2
}

const risultato = area(50, 84)
console.log(`L'area del rettangolo è ${risultato}`) */


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* function crazySum(num1, num2){
  if(num1 === num2){
    return (num1 + num2)*3
  } else{
    return (num1 + num2)
  }
}

const risultato = crazySum(50, 50)
console.log(`Il risultato è ${risultato}`) */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* function crazyDiff(numero){
  if(numero > 19){
    return Math.abs(numero - 19)*3
  } else{
    return Math.abs(numero - 19)
  }
}

const risultato = crazyDiff(-20)
console.log(`La differenza è ${risultato}`) */


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* function boundary(n){
  if(n >= 20 && n <= 100 || n === 400){
    return true
  } else{
    return false
  }
}
console.log(boundary(20))
console.log(boundary(400))
console.log(boundary(101)) */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* function epify(stringa){
  if(stringa.startsWith("EPICODE")){
    return stringa
  } else{
    return "EPICODE" + stringa
  }
}

console.log(epify("EPICODE ci garba"))
console.log(epify(" funziona")) */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* function check3and7(numero){
  const numeroPositivo = parseInt(numero)
  if(numeroPositivo % 3 === 0 || numeroPositivo % 7 === 0){
    return numeroPositivo + " è divisibile per 3 o 7"
  } else {
    return "Il numero non è divisibile per 3 o 7"
  }
}

console.log(check3and7(3))
console.log(check3and7(7))
console.log(check3and7(80)) */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* function reverseString(stringa){
  const stringaDaInvertire = stringa.split("")
  const caratteriInvertiti = stringaDaInvertire.reverse()
  const risultatoFinale = caratteriInvertiti.join("")
  console.log(risultatoFinale)
}
reverseString("EPICODE") */




/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* function upperFirst(stringa){
  const arrayParole = stringa.split(" ")
  for(let i = 0; i < arrayParole.length; i++){
    arrayParole[i] = arrayParole[i].charAt(0).toUpperCase() + arrayParole[i].slice(1);
  }
  const risultatoFinale = arrayParole.join(" ")
  console.log(risultatoFinale)
}

upperFirst("Grazie a Google finalmente ce l'ho fatta") */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* function cutString(stringa){
  return stringa.slice(1, -1)
}

console.log(cutString("Parola tagliata"))
 */


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/*
  function giveMeRandom(numero){
  for(let i = 0; i < numero; i++){
    console.log(Math.random()*11)
  }
}
giveMeRandom(7)
 */
