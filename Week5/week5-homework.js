// WEEK 5 HOMEWORK: 
/*
Question 1: Create a constructor for a Car object. Each Car object should contain the 
following properties: model, year, color, and mpg. Use the constructor to create 3 different 
Car objects. Print out the mpg of each car to the console. 
*/

// Your code here! 
function Car(model, year, color, mpg){
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
}

var car1 = new Car("Nissan Altima", "2015", "Black", "20 mpg");
var car2 = new Car("Dodge Charger", "2023", "Red", "15 mpg");
var car3 = new Car("Porche Cayenne", "2018", "White", "18 mpg");
console.log(car1.mpg);
console.log(car2.mpg);
console.log(car3.mpg);

/*
Question 2: Create a constructor for a Vehicle object. Each Vehicle object should contain only 
one property: car. Using the 3 Car objects you created previously, create 3 Vehicle objects. 
Print out the mpg of the car property in each Vehicle object.
*/

// Your code here! 
function Vehicle(car){
    this.car = car;
}
 
var vehicle1 = new Vehicle(car1);
var vehicle2 = new Vehicle(car2);
var vehicle3 = new Vehicle(car3);
console.log(stringTest);
console.log(vehicle1.car.mpg);
console.log(vehicle2.car.mpg);
console.log(vehicle3.car.mpg);
