/*
Let’s put these concepts into practice!

First, we’ll write code using an interval to count
one by one every second starting from 1.

Then, we’ll impose a limit on the time we want to count
for by using a timeout. Let’s limit the counting to only last 15 seconds.
*/

var currentTime = 1; // global variable

function printNumber()
{
    //do the parameters have to have hte same name as the method setTimeout is affecting. 
    // If so, does the order of hte parameters matter?
    // clear interval, clear timeout, setInterval, setInterval
    console.log(currentTime);
    currentTime++;
}

//ues a ninterval to count each second
var intervalID = setInterval(printNumber, 1000);

//limit interval to 15 seconds
//clearInterval
setTimeout(clearInterval, 16000, intervalID);

