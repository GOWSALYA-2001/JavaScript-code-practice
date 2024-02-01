//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// main.js
import { countries } from './country.js';
import { webTechs } from './web.js';

// Access the arrays
console.log('Countries:', countries);
console.log('Web Techs:', webTechs);

//First remove all the punctuations and change the string to array and count the number of words in the array

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const arr = text.split(" ")
console.log(arr);
console.log(arr.length);

//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart);
//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
console.log(shoppingCart);
//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);

//remove 'Honey' if you are allergic to honey
const allergicToHoney = true; // Change this based on your allergy status
if (allergicToHoney) {
    const honeyIndex = shoppingCart.indexOf('Honey');
    if (honeyIndex !== -1) {
        shoppingCart.splice(honeyIndex, 1);
        console.log(shoppingCart);
    }
}
//modify Tea to 'Green Tea'
shoppingCart[3]="Green Tea";
console.log(shoppingCart);

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(countries.includes('Ethiopia')){
    const ethiopiaindex = countries.indexOf('Ethiopia')
    console.log(countries[ethiopiaindex].toUpperCase());
    console.log(countries);
}
else{
    countries.push='Ethiopia';
    console.log(countries);
}

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess');
}
else{
    webTechs.push('Sass');
    console.log(webTechs);
}

//Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)
