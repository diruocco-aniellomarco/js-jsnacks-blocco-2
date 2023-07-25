const stampa = document.getElementById('stampa');

let userNumber = prompt('inserisci un numero');




if (userNumber % 2 != 0) {
    console.log(userNumber);
    userNumber++;
}


stampa.innerHTML = userNumber;
console.log(userNumber);