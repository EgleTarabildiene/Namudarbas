// Darbas su objektais


//1.     Duomenų Objektas: Sukurkite objektą, kuris saugotų jūsų 
//mėgstamiausios knygos pavadinimą, autorių ir leidimo metus.
//Išveskite kiekvieną objekto savybę naudojant for in ciklą.

const author = { name: "Agata", title: "Kortos ant stalo", year: 1936 };

let text = "";
for (let x in author) {
    text += author[x] + " ";
}
console.log(text);
//2.     Vartotojų Masyvas: Sukurkite masyvą, kuriame būtų kelios objektų reikšmės, 
// kiekviena reikšmė turėtų vartotojo vardą ir amžių.Naudodami for of ciklą, 
// išveskite kiekvieno vartotojo vardą ir amžių.

const vartotojai = [
    { name: 'Jonas', age: 99 },
    { name: 'Maryte', age: 88 },
    { name: 'Petras', age: 77 },
    { name: 'Ona', age: 66 },
];

for (const vartotojas of vartotojai) {

    console.log(`${vartotojas.name}: ${vartotojas.age}`);
}







//3.    Sąrašo Filtravimas: Turite objektų masyvą, kuriame saugoma informacija
// apie įvairius produktus(pavadinimas, kaina, kategorija).
//  Parašykite funkciją, kuri naudojant for of ciklą grąžintų tik tuos produktus,
//  kurie priklauso tam tikrai kategorijai.
console.log('-----------priklauso kategorijai-----------------');

const produktas = [
    { pavadinimas: 'Kogus', kaina: 5, kategorija: 'maistas' },
    { pavadinimas: 'New', kaina: 50, kategorija: 'rubai' },
    { pavadinimas: 'Samsung', kaina: 230, kategorija: 'technika' },
    { pavadinimas: 'LG', kaina: 32, kategorija: 'technika' },

];

function getByValue(arr, value) {
    let verte = 0;

    for (const verte of arr) {

        for (const p in verte) {
            if (verte.hasOwnProperty(p) && verte[p] == value) {
                return verte;
            }
        }
    }
}

console.log(getByValue(produktas, 'rubai'));
console.log(getByValue(produktas, 'maistas'));
//console.log(getByValue(produktas, 'technika'));







//4.     Objekto Kopijavimas: Parašykite funkciją,
//kuri naudojant for in ciklą sukurtų objekto kopiją.


let obj = {
    name: 'Jonas',
    amzius: 22,
};
function copy(mainObj) {
    let objCopy = {};

    for (const key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

console.log(copy(obj));


//5.     Raktų ir Reikšmių Atrinkimas: Turite vartotojo objektą su
// įvairiomis savybėmis.Naudodami for in ciklą,
// sukurti du masyvus: viename saugokite objekto raktus, o kitame - reikšmes.


const objektai = ([
    [1, "Jonas"],
    [2, "Petras"],
    [3, "Stonkus"]
]);

let keys = [];
let values = [];

for (const [key, value] of objektai) {
    keys.push(key);
    values.push(value);
}

console.log(keys);
console.log(values);


//6.     Masyvo Suma: Turite masyvą, kuriame yra skaičiai. Naudodami for ciklą,
//apskaičiuokite masyvo skaičių sumą.
console.log('--------------array suma-----------');
function suma(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];

    } return sum;
}
console.log(suma([10, 15, 20, 22, 50]));
console.log(suma([2, 4, 1, 5, 9]));




//7.     Didžiausias Skaičius: Turite skaičių masyvą.Naudodami for ciklą,
// raskite didžiausią skaičių masyve.
console.log('--------------didziausias skaicius masyve-----------');

function big(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        max += array[i];

    } return max;
}
console.log(suma([10, 15, 20, 22, 50]));
console.log(suma([2, 4, 1, 5, 9]));




//8.     Objekto Savybių Skaičius: Sukurkite funkciją, kuri naudojant for in
//ciklą, grąžina objekto savybių skaičių.



const user = {
    name: "Egle",
    age: 36,
    Surname: "Tarabildiene",
    address: "Siauliai",
};

let count = 0;
for (let key in user) {
    if (user.hasOwnProperty(key)) {
        count++;
    }
}

console.log("Number of keys: " + count);




//9.     Sąlyginis Objektų Atrinkimas: Turite vartotojų masyvą su objektais,
//kuriuose yra vardas ir amžius.Naudodami for of ciklą,
//išveskite tik tuos vartotojus, kurių amžius yra didesnis nei 18.
console.log('--------------amzius daugiau nei 18-----------');

const komplektas = [
    { name: 'Jonas', age: 25 },
    { name: 'Marina', age: 30 },
    { name: 'Ona', age: 5 },
];


const daugiau18 = [];
for (const vienas of komplektas) {
    if (vienas.age > 18) {
        daugiau18.push(vienas);
    }
}
console.log(daugiau18);







//10.  Objekto Savybių Keitimas: Turite objektą,
//  kuriame saugomi įvairių žmonių amžiai.Naudodami for in ciklą,
//  padidinkite kiekvieno asmens amžių 1 metais.

const zmones = [
    { name: "Ana", age: 1 },
    { name: "Ona", age: 2 },
    { name: "Vida", age: 3 },
];

for (let zmogus of zmones) {
    zmogus.age += 1;
}

console.log(zmones);