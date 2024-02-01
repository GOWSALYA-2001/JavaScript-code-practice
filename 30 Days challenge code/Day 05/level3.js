//The following is an array of 10 students ages:

const age = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(age);
//Sort the array and find the min and max age
age.sort((a,b)=>a-b);
    console.log("Sorting array is:"+age)
    const minage = Math.min(...age)
    console.log("Minimum age is: "+minage);
    const maxage = Math.max(...age)
    console.log("Maximum age is: "+maxage);

//Find the median age(one middle item or two middle items divided by two)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b); // Ensure the array is sorted numerically

const middleIndex = Math.floor(ages.length/2)
if(ages.length%2==0){
    const mid1 = ages[middleIndex-1];
    const mid2 = ages[middleIndex];
    const mid = [mid1+mid2]/2;
    console.log("Median age is: "+mid);
}
else{
    const range = ages[middleIndex]
    console.log("Median ages is: "+range);
}

//Find the average age(all items divided by number of items)
const sum = ages.reduce((acc,ages)=>acc+ages,0)
const avg = sum/ages.length
console.log("Average age is:",avg);

//Find the range of the ages(max minus min)
const rangeage = minage-maxage;
console.log("Range of the ages is:",rangeage);

//Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
const mindifference = Math.abs(minage-avg);
const maxdifference = Math.abs(maxage-avg);
console.log("Min-average is: "+mindifference);
console.log("Max-average is: "+maxdifference);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  console.log(countries.slice(0,10));

  //Find the middle country(ies) in the countries array
  const middlearr = Math.floor(countries.length/2);
  console.log(countries[middlearr]);

  //Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
  if(countries.length%2===0){
    const firsthalf = countries.slice(0,middlearr);
    const secondhalf = countries.slice(middlearr);
    console.log("First half:",firsthalf);
    console.log("second half:",secondhalf);
  }
  else{
    const adjustedMiddleIndex = middlearr + 1;// Adjust the middle index for odd length
    const firsthalf1 =countries.slice(0,middlearr);
    const secondhalf2 = countries.slice(middlearr);
    console.log("First half is:",firsthalf1);
    console.log("Second half is:",secondhalf2);
  }
