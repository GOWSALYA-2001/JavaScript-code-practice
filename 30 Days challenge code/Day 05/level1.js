//Declare an empty array;
let arr = Array();
console.log(arr);

//Declare an array with more than 5 number of elements
let num = [1,2,3,4,5,6,7,8];
console.log(num);

//Find the length of your array
console.log(num.length);

//Get the first item, the middle item and the last item of the array
let a = num[0];
console.log(a);
let b = num[4];
console.log(b);
let c = num.length-1;
console.log(c);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let array = ["gowsi",23,"developer",2001,"love to travel",true,"@$"];
console.log(array.length)

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"];

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length/2)]);
console.log(itCompanies[itCompanies.length -1]);


//Print out each company

itCompanies.forEach(function(company){
    console.log(itCompanies);
});
  
console.log("**********");
//Change each company name to uppercase one by one and print them out
for(let i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i].toUpperCase());
}

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence = itCompanies.join(',')+" are big IT companies.";
console.log(sentence);

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let targetCompany = "IBM";
let found= false;
for(const com of itCompanies){
    if(com === targetCompany){
        found = true;
        console.log(com);
        break;
    }

}
if(!found){
    console.log("Company is not found")
}

//Filter out companies which have more than one 'o' without the filter method
// Iterate over the array and filter out companies with more than one 'o'
let companiesWithOneO = [];

for (const company of itCompanies) {
    let oCount = 0;
    for (const char of company) {
        if (char === 'o' || char === 'O') { // Considering both lowercase and uppercase 'o'
            oCount++;
        }
        if (oCount > 1) {
            break;
        }
    }
    if (oCount === 1) {
        companiesWithOneO.push(company);
    }
}

console.log(companiesWithOneO);

//Sort the array using sort() method
console.log(itCompanies.sort());

//Reverse the array using reverse() method
console.log(itCompanies.reverse());

//Slice out the first 3 companies from the array
let itCompanies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"];

console.log(itCompanies1.slice(0,3) ) ;

console.log("*********");
//Slice out the last 3 companies from the array
console.log(itCompanies1.slice(4,7));
//Slice out the middle IT company or companies from the array
const middleIndex = Math.floor(itCompanies1.length/2);
console.log(itCompanies1.slice(middleIndex,middleIndex+1));
//Remove the first IT company from the array
console.log(itCompanies1.shift());
//Remove the middle IT company or companies from the array
const mid = Math.floor(itCompanies.length / 2);
itCompanies.splice(mid, 1);
console.log(itCompanies);
//Remove the last IT company from the array
console.log(itCompanies1.pop());
//Remove all IT companies
itCompanies1.length=0;
console.log(itCompanies1);

