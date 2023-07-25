const listGuest = document.getElementById('list_guest')

const listName = [
    'Marco',
    'Luigi',
    'Luca',
    'Giovanni',
    'Andrea'
];

const listSurname = [
    'Vanni',
    'De Luca',
    'Notari',
    'Brambilla',
    'Rossi'
];

let invited = [];

for ( let i = 0; i < 10; i++) {
    let randomName = Math.floor(Math.random() * 4) + 0;
    let randomeSurname = Math.floor(Math.random() * 4) + 0;

    console.log('Nome Random: ' + listName[randomName]);
    console.log('Congnome Random: ' + listSurname[randomeSurname]);

    invited [i] = listName[randomName] + ' ' + listSurname[randomeSurname];
    listGuest.innerHTML += `<li> ${invited [i]} </li>`
};

console.table(invited);