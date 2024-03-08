//Funkcijos

// 1. Parašykite funkciją, kuri priima vartotojo vardą kaip argumentą ir 
//grąžina pasveikinimo žinutę.
console.log('-----pasveikinimo zinute---------------');

function zinute(vardas) {
    return `${vardas} labas`;
}
console.log(zinute('Veronika'));
console.log(zinute('Tom'));


//2. Sukurkite funkciją, kuri priima du skaičius kaip argumentus ir 
//grąžina jų sumą.
console.log('--------skaiciu suma---------------');

function suma(a, b) {
    return a + b;
}
console.log(suma(10, 4));
console.log(suma(5483, 12));
console.log(suma(7820, 41470));


// 3. Parašykite funkciją, kuri priima masyvą kaip argumentą ir 
// grąžina visų masyvo elementų sumą.
console.log('-------masyvo suma---------------');

function arraySum(array) {
    let aSuma = 0;
    for (let i = 0; i < array.length; i++) {
        aSuma += array[i];
    }
    return aSuma;
}
console.log(arraySum([10, 4, 6]));
console.log(arraySum([3, 12, 15, 5690]));
console.log(arraySum([1, 12, 13, 14]));


console.log('-------masyvo suma2---------------');

function arraySum2(array) {
    return array.reduce((a, b) => a + b, 0);
}
console.log(arraySum2([10, 4, 6, 5, 20, 0]));
console.log(arraySum2([3, 12, 15, 5690]));
console.log(arraySum2([1, 12, 13, 14]));

// 4.  Sukurkite funkciją, kuri priima masyvą skaičių ir 
// grąžina didžiausią skaičių masyve.
console.log('-------didziausias masyve---------------');

function didArray(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max)
            max = array[i];
    }
    return max;
}
console.log(didArray([10, 4, 6]));
console.log(didArray([3, 12, 15, 5690]));
console.log(didArray([1, 12, 13, 14]));

// 5.Parašykite funkciją, kuri priima tekstą kaip argumentą ir 
// grąžina to teksto ilgį.
console.log('-------teksto ilgis---------------');

function tekstoIlgis(tekstas) {
    return tekstas.length;
}
console.log(tekstoIlgis('autobusas'));
console.log(tekstoIlgis('pultas'));
console.log(tekstoIlgis('a'));


// 6.: Sukurkite funkciją, kuri priima skaičių ir 
//grąžina jo faktorialą.
console.log('-------faktorialas--------------');
function faktorial(n) {
    let result = n;
    for (let i = n; i >= 2; i--) {
        result = result * (i - 1);
    }
    return result;
}
console.log(faktorial(5));
console.log(faktorial(1));
console.log(faktorial(9));


//7. Parašykite funkciją, kuri priima masyvą skaičių ir skaičių kaip argumentus, 
// o grąžina naują masyvą, 
// kuriame yra tik tie skaičiai, kurie didesni už pateiktą skaičių.
console.log('-------didesni uz pateikta--------------');

function biggerThan(arr, n) {
    let bigger = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            bigger.push(arr[i])
        }
    }
    return bigger;
}
console.log(biggerThan([1, 12, 13, 14], 5));
console.log(biggerThan([50, 10, 15, 3], 13));


// 8. Sukurkite funkciją, kuri priima tekstą kaip argumentą 
// ir grąžina jį atvirkštine tvarka.
console.log('-------tekstas atvirksciai--------------');

function reverse(text) {
    let result = '';
    for (let i = text.length - 1; i >= 0; i--) {
        result += (text[i]);
    }
    return result;
}
console.log(reverse('abc'));
console.log(reverse('vakaras'));
console.log(reverse('kalendorius'));


// 9. Parašykite funkciją, kuri nustato, ar pateiktas tekstas yra palindromas.
console.log('-------polidromas--------------');

function palindromas(text) {
    let result = '';
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    if (result === text) {
        return `${result} yra polidromas`;
    } else {
        return `${result} ne polidromas`
    }
}

console.log(palindromas('abc'));
console.log(palindromas('vakaras'));
console.log(palindromas('level'));
console.log(palindromas('savas'));
console.log(palindromas('madam'));


// 10. Sukurkite funkciją, kuri priima skaičių ir grąžina true, 
// jei skaičius yra lyginis, ir false, jei skaičius yra nelyginis.
console.log('-------ar lyginis--------------');

function lyginis(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(lyginis(10));
console.log(lyginis(5));
console.log(lyginis(8));
console.log(lyginis(22));


// 11.  Parašykite funkciją, kuri priima tekstą ir dvi eilutes: 
// pakeistiną simbolį ir pakeitimo simbolį.
// Funkcija grąžina naują tekstą su pakeistais simboliais.

console.log('-------pakeistas tekstas--------------');

function kitasTekstas(text, a, b) {

    return text.replaceAll(a, b);

}
console.log(kitasTekstas('obuolys', 'o', '*'));
console.log(kitasTekstas('margutis', 'a', '@'));
console.log(kitasTekstas('mandarinas', 'a', '@'));



// 12. Sukurkite funkciją, kuri priima temperatūrą Celsijaus 
//laipsniais ir konvertuoja ją į Farenheito laipsnius.
console.log('-------celcijus i farenheita--------------');

function farenheita(celcijus) {
    return celcijus * 1.8 + 32;
}
console.log(farenheita(10));
console.log(farenheita(-5));
console.log(farenheita(-3));


//13.  Parašykite funkciją, kuri priima masyvą ir 
//grąžina naują masyvą be dublikatų.
console.log('-------masyvas be dublikatu--------------');

function arrayBe(array) {
    let be = [];
    for (let i = 0; i < array.length; i++) {
        if (!be.includes(array[i])) {
            be.push(array[i])
        }
    }
    return be;
}
console.log(arrayBe([10, 4, 6, 10, 4, 7]));
console.log(arrayBe([1, 2, 3, 10, 3, 4, 7]));
console.log(arrayBe([1, 1, 687, 1, 3, 2, 3, 1]));


//14. Sukurkite funkciją, kuri priima skaičių ir grąžina true, 
// jei skaičius yra pirminis, ir false, jei ne.
console.log('-------pirminis--------------');

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 == 0 || number % 3 == 0) {
        return false;
    }
    for (let i = 5; i * i <= number; i = i + 6) {
        if (number % i == 0 || number % (i + 2) == 0)
            return false;
    }
    return true;
}
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(8));
console.log(isPrime(11));


// 15. Parašykite funkciją, kuri priima masyvą skaičių ir
// grąžina jį surikiuotą mažėjančia tvarka.
console.log('-------sortas--------------')
function sortas(array) {
    return array.sort((a, b) => a - b).reverse();
}
console.log(sortas([12, 4, 6, 10, 1, 7]));
console.log(sortas([50, 300, 15, 788, 799, 5]));



//16.  Sukurkite funkciją, kuri priima du skaičius kaip 
//pradžios ir pabaigos intervalo ribas ir grąžina visų skaičių, 
//esančių tame intervale, sumą.
console.log('-------intervalo suma--------------')

function ciklas(min, max) {
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
    } return total;
}


console.log(ciklas(0, 7));
console.log(ciklas(26, 32));
console.log(ciklas(-10, 11));



// 17.  Parašykite funkciją, kuri priima tekstą ir grąžina jį, 
//pakeisdamas kiekvieną raidę į sekantį raidę abėcėlėje.
console.log('-------sekanti raide--------------')

function nextLetter(str) {
    for (let i = 0; i < str.length; i++) {
        if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
            str = str.replace(str.charAt(i), String.fromCharCode(str.charCodeAt(i) + 1));
        }
    }
    return str;
}
console.log(nextLetter('vakaras'));
console.log(nextLetter('mama'));


// 18.  Sukurkite funkciją, kuri priima gimimo metus ir grąžina asmenio amžių.
console.log('-------asmens amzius--------------')

function amzius(metai) {
    return 2024 - metai;
}
console.log(amzius(1988));
console.log(amzius(1964));
console.log(amzius(2018));


//19.Parašykite funkciją, kuri priima tekstą ir simbolį,
//o grąžina, kiek kartų tas simbolis pasikartoja tekste.
console.log('-------pasikartojantis simbolis--------------')

function texS(tekstas, simbol) {
    let a = 0;
    let ns = 0;
    for (let i = 0; i < tekstas.length; i++) {
        ns = tekstas[i];
        if (ns === simbol) {
            a++;
        }
    } return a;
}
console.log(texS('pirmadienis', 'i'));
console.log(texS('burbulas', 'b'));


//20. Parašykite funkciją, kuri priima kelių masyvų sąrašą ir
//grąžina naują masyvą, kuris sudarytas tik iš tų elementų,
//kurie pasikartoja visuose pradiniuose masyvuose.
console.log('-------------naujas masyvas--------')

function doubleArray(a, b) {
    let naujas = [];

    for (let i = 0; i < b.length; i++) {

        if (a.includes(b[i])) {
            naujas.push(b[i]);
        }
    } return naujas;
}
console.log(doubleArray([5, 6, 7, 10], [2, 5, 6, 9, 10]));
console.log(doubleArray([2, 155, 14, 19, 9], [1, 2, 2, 2, 6, 9, 155]));
















