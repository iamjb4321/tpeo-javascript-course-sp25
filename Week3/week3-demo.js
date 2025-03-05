// WEEK 3 DEMO: 
/*
Task: write a function, walkToTreasure, that takes in x and y coordinates on a beach 
and “walks” to the location of the treasure buried in the sand. 
*/

function walkToTreasure(x, y, treasureX, treasureY) {

    // Find x ccordinate
    while (x != treasureX) {
        if (x < treasureX) {
            console.log("Going right");
            x++;
        } else {
            console.log("Going left");
            x--;
        }
    }

    // Find y coordinate
    while (y != treasureY) {
        if (y < treasureY) {
            console.log("Going forward");
            y++;
        } else {
            console.log("Going backward");
            y--;
        }
    }

    console.log("Found treasure!");
}

walkToTreasure(0, 0, );