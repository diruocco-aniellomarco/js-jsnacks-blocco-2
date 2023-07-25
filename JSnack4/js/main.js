const array1Position = document.getElementById('array1_position');
const array1Length = document.getElementById('array1_length');
const array2Position = document.getElementById('array2_position');
const array2Length = document.getElementById('array2_length');
const addElements = document.getElementById('add_elements');
const array2NewPosition = document.getElementById('array2_new_position');
const array2NewLength = document.getElementById('array2_new_length');

let array1 =[
    1,
    15,
    20,
    56,
    70,
    51,
    20,
    88,
    40,
];
let array2 =[
    95,
    15,
    44,
    6,
];

array1Position.innerHTML = array1;
array1Length.innerHTML = array1.length;
array2Position.innerHTML = array2;
array2Length.innerHTML = array2.length;


for ( let i = array2.length; i < array1.length; i++ ) {
    let numRandom = Math.floor(Math.random() * 100) + 1;
    array2[i] = numRandom;
    addElements.innerHTML += array2[i] + ', ';
    // console.log(array2[i])
}

array2NewPosition.innerHTML = array2;
array2NewLength.innerHTML = array2.length;;
console.log(array1.length)
console.log(array2.length)

