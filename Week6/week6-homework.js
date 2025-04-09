/*
Question 1: Write a function, reverse, that accepts one parameter: string.
In the function, return the string but reversed (Example: if “hey” is the
input, then return “yeh”). Call this function three times each with
different inputs and print the results to the terminal.
*/

function reverse(string) {
    // Write code below
    var reversed = "";
    for(var i = string.length - 1; i >= 0 ; i--){
        reversed += string.charAt(i);
    }
    return reversed;
}

console.log(reverse("Happy"));
console.log(reverse("Unfortunately"));
console.log(reverse("Revive"));


/*
Question 2: Write a function, numVowels, that accepts one parameter: string.
In the function, return the number of vowels string has. Call this function
three times each with different inputs and print the results to the terminal.
*/

function numVowels(string) {
    // Write code below
    const VOWELS = "aeiou";
    var numVowels = 0;
    for(var i = 0; i < string.length; i++){
        if(VOWELS.includes(string[i].toLowerCase())){
            numVowels++;
        }
    }
    return numVowels;
}

console.log(numVowels("Vowels"));
console.log(numVowels("Oreos"));
console.log(numVowels("Hi"));


/*
Question 3: Write a function, numStringsShorterThanLength that accepts two parameters:
strings (an array of strings) and length (a number). In the function, return the number
of strings in strings that have a length less than length. Call this function three times
each with different inputs and print the results to the terminal.
*/

function numStringsShorterThanLength(strings, length) {
    // Write code below
    var numStringsShorterThanLength = 0;
    for(var i = 0; i < strings.length; i++){
        if(strings[i].length < length){
            numStringsShorterThanLength++;
        }
    }
    return numStringsShorterThanLength;
}

var arr = [ "wow", "happy", "exciting"];
console.log(numStringsShorterThanLength(arr, 4));
arr = [ "reading", "is", "exhilarating"];
console.log(numStringsShorterThanLength(arr, 8));
arr = [ "I", "like", "cows"];
console.log(numStringsShorterThanLength(arr, 2));