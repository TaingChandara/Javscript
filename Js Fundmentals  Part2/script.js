// 'use strict';

// let hasDriversLicense = false;
// const passtest = true;

// if (passtest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive LD');


// Funtion

// function logger() {
//     console.log('My name is dara');
// }

// // Calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apple, orange) {
//     console.log(apple, orange);
//     const juice = `Juice with ${apple} apple and ${orange}  ornage.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');



// // Function Declaration
// function calcgel(birthday) {
//     return 2039 - birthYeah
// }
// const age1 = calcgel(1991);

// // Function expression
// const calcAge2 = function (birthYeah) {
//     return 2039 - birthYeah;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);


// Arrow Function
// const calcAge3 = birthYeah => 2039 - birthYeah;
// const age2 = calcAge3(1991);
// console.log(age2);

// const yearsUntiRetirement = (birthYeah, firstname) => {
//     const age = 2039 - birthYeah;
//     const retirement = 65 - age;

//     return `$(firstname) retires in ${retirement}year`;
// }

// console.log(yearsUntiRetirement(1991, 'Jonas'));
// console.log(yearsUntiRetirement(1989, 'Bob'));



// Coding Challenge #4

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));
// // Test1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKolas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKolas);

// const checkwinner = function (avgDolphines, avgKolas) {
//     if (avgDolphines >= 2 * avgKolas) {
//         console.log(`Dolphines win 🏆 (${avgDolphines} vs. ${avgKolas})`);
//     } else if (avgKolas >= 2 * avgDolphines) {
//         console.log(`Kolas win 🏆 (${avgKolas} vs. ${avgDolphines})`);
//     } else {
//         console.log('No Team wins...');
//     }
// }

// checkwinner(scoreDolphins, scoreKolas);

// checkwinner(576, 111);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKolas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKolas);
// checkwinner(scoreDolphins, scoreKolas);


// Array
// const calcAge = function (birthYeah) {
//     return 2022 - birthYeah;
// }
// const years = [1990, 1998, 2002, 2000, 2013];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// calcAge(years[years[years.length - 1]]);
// console.log(ages)


// Coding Challenge #2

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);






