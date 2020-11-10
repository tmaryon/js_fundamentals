/* ----- JavaScript Variables Tutorial -------- */
/* 
 * File:   var_tut.js
 * Author: Taylor E. Maryon (@tmaryon)
 * Notes:  The first tutorial in the series, var_tut.js focuses on 
 * assigning/declaring variables, scope, data types, arrays, and
 * objects.  Semi-colons are optional, but I have used them here
 * since they may be required in academic settings or training 
 * programs.
 */

/* You may run this program from the terminal by typing:
 * node var_tut.js
 * Uncomment the console.log() lines that correspond to what
 * you're practicing to view them, and comment them out when
 * you finish, so you don't output the entire tutorial each
 * time you run this script. :)
*/
 
/* Variables */

// var, let, and const -- creating and assigning values to them


/* var: globally scoped, non-constant
 * Let and const should be used instead, as they provide better
 * security and scoping
*/

var hello = "Hello World"; // assign the string "Hello World" to hello

// to view the value of a variable, use console.log(x), like this:
console.log(hello);

// Demo: print multiple variables to the console
var yourName = "Replace Me!"; // *** Enter your name here ***
var greeting = "Hello"; // We will combine this with yourName 

// Let's display both variables -- make sure you add your name to yourName
// console.log(greeting + ", " + yourName);

/* NOTE: We have just used string concatenation, which added a comma and
 * a space (in quotes) to the output.  You can print out multiple variables,
 * or add extra text in console.log() by adding the '+' symbol. 
*/

// variables have multiple data types: string, number, and boolean
// and others we will cover later
// var string  = "I am a string";  // use double or single quotes
// var num     = 5;                // any number, do not use quotes
// var boolean = true;             // true or false 

// examine the type of each using typeof(x)
// console.log(typeof(string));
// console.log(typeof(num));
// console.log(typeof(boolean));

let myArray = [1,2,3];

console.log(myArray)


swArray = ['darth vader', 'prax blipborp']

let result = swArray.join(' - ')
//console.log(result)
console.log(swArray.join(' - '))
console.log(swArray)