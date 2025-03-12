// WEEK 3 DEMO: 
/*
Task: write a function, walkToTreasure, that takes in x and y coordinates on a beach 
and “walks” to the location of the treasure buried in the sand. 
*/

function walkToTreasure(x,y, treasureX, treasureY){

    //find x coordinate
    x = getToPosition(x, treasureX)
    y = getToPosition(y, treasureY)
    console.log("Found treasure");
}

function getToPosition(z, treasurePos){
    while(z != treasurePos){
        if(z < treasurePos){
            console.log("Going right!")
            z++;
        }else{
            console.log("Going left!")
            z--;
        }
    }
}

walkToTreasure(0, 0, 3, 9);