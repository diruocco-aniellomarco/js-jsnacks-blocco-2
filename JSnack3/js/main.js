const listRandom = document.getElementById('list_random');
const listOdd = document.getElementById('list_odd');
const sumOddEl = document.getElementById('sum_odd_el');

let listNumber = [];
let sumOdd = 0;

for (let i = 0; i < 10; i++) {
    
    let numRandom = Math.floor(Math.random() * 10) + 1;

    listNumber[i] = numRandom;

    if ( i != 9) {
        listRandom.innerHTML += listNumber[i] + ', ';
    }
    // Per non far venire la virgola nella parte finale della lista
    else {
        listRandom.innerHTML += listNumber[i];
    }
    // posizione dispari non indice 
    if ( i % 2 == 0) {
        if ( i != 9) {
            listOdd.innerHTML += listNumber[i] + ', ';
        }
        // Per non far venire la virgola nella parte finale della lista
        else {
            listOdd.innerHTML += listNumber[i];
        }

        sumOdd = sumOdd + listNumber[i];
        
        console.log(listNumber[i]);
        console.log(i);
    };
};

console.log(listNumber);
console.log('somma: ' + sumOdd);
sumOddEl.innerHTML = sumOdd;
