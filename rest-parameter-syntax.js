/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum:", sum)


// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2:", sum2);

// Functionusing ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

    return sum
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum3:", sum3)


/*
    The rest parameter Challenge
*/

/*
    You will assign an array to a variable which will contain a copy of the array 
    mixedLetters and 6 other letters.
    You will create an arrow function which should take two parameters. 
    This function should combine all the argument passed in into a single array and 
    sort them and reverse them and then return this array.
    You are free to choose an arrow function of your choice to do this.
    Within the function body, you are free to create the array any way you want, but 
    try to look out for opportunities to use what you have been learning in the advanced 
    JavaScript material.

    1. Create a variable named: moreMixedLetters using the keyword let.
    2. Assign an array to the variable moreMixedLetters which should be 
       a copy of the array mixedLetters and then the following 
       values: 'h', 'k', 'g', 'j', 'i', 'l'  (note steps 1 and 2 should be 
       done on a single line).
    3. Log out moreMixedLetters.
    4. Create a variable named: updateSortReverse using the keyword const.
    5. Assign the variable updateSortReverse an arrow function.
    6. The arrow function should take two parameters one named: arr and another 
       named: letters which should use the rest parameter syntax.
    7. This arrow function should combine all the argument passed in into a 
       single array and sort them and reverse them and then return this array.
    8. Create a variable named reverseSort using the keyword let.
    9. Variable reverseSort should be assigned the return value from 
       calling the updateSortReverse function passing in the moreMixedLetters 
       array and the string values: 'n', 'm', 'o'.
    10. log out the variable reverseSort to see its value.
    11. log out the variable mixedLetters to see that it has not been changed 
        if you have done everything correctly
*/

// Initialises the array mixedLetters with the values 'b', 'd', 'a', 'c', 'f', and 'e'.
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

// Created a new array moreMixedLetters by spreading the elements of mixedLetters 
// and adding the values 'h', 'k', 'g', 'j', 'i', and 'l'.
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];

// Outputs the contents of the moreMixedLetters array to the console.
console.log(moreMixedLetters);

// I defined an arrow function named updateSortReverse that takes two 
// parameters: arr (an array) and letters 
// (using rest parameter syntax to collect multiple arguments as an array)
const updateSortReverse = (arr, ...letters) => {
    // Combines all arguments into a single array.
    let combinedArray = [...arr, ...letters];
    // Sorts this combined array in ascending order.
    let sortedArray = combinedArray.sort();
    // Reverses the sorted array.
    let reversedArray = sortedArray.reverse();
    // Returns the sorted and reversed array.
    return reversedArray;
};

// Calling the Arrow Function
let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');

// Outputs the contents of the reverseSort array to the console.
console.log(reverseSort);

/* 
    Outputs the contents of the original mixedLetters array 
    to confirm that it has not been changed by the operations performed.
*/
console.log(mixedLetters);