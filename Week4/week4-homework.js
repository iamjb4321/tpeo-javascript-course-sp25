/*
Question 1: Write a function named powersOfThree that prints out the powers of three up to 3⁹ 
(example: 1, 3, 9, …, 19683) using a for loop. Pick your favorite number out of all of these 
powers of three and also print out “This is my favorite power of three!” when your favorite 
power of three prints. Use a timeout to call this function after waiting 3 seconds.
*/
function powersOfThree() {
    // Write your code here
    for(i = 0; i <= 9; i++){
        var num = Math.pow(3, i);
        if(num == 9){
            console.log(num + " -- This is my favorite power of three!");
        }else{
            console.log(num);
        }
    }
}

// Call your function here
setTimeout(powersOfThree, 3000);
/*
Question 2: Write a function named everyTenSeconds that prints out “Hello World!” to the terminal 
every 10 seconds for a total of 2 minutes. Feel free to create any helper functions you need to 
accomplish this. Test your function by calling it once.
*/
function everyTenSeconds() {
    // Write your code here
    var intervalId = setInterval(console.log, 10000, "Hello World");
    setTimeout(clearInterval, 130000, intervalId);
}

// Call your function here
everyTenSeconds();