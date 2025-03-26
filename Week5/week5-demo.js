// WEEK 5 DEMO: 
/* 
Let's create a constructor for a Student, which takes in their first name, 
last name, university, major, and graduation year. 
*/ 

function Student(firstName, lastName, university, major, graduationYear) {
    this.firstName = firstName;
    this.lastName = lastName; 
    this.university = university;
    this.major = major;
    this.graduationYear = graduationYear; 
    this.hasGraduated = graduationYear <= 2024; 
}

var sarah = new Student("Sarah", "Ding", "UT Austin", "Informatics", 2027);
var vincent = new Student("Vincent", "Do", "UT Austin", "Computer science", 2025);

console.log(sarah.major);
console.log(vincent["hasGraduated"]);
console.log(`${vincent.firstName} ${vincent.lastName} is studying ${vincent["major"]} until ${vincent.graduationYear}.`);


/*
Now, create a constructor for a Course, which will take in a student taking the class, 
the class name, and the class location. 
*/ 

function Course(student, name, location) {
    this.student = student;
    this.name = name;
    this.location = location;
}

var introToJS = new Course(vincent, "Intro to Javascript", "GDC 2.210");
console.log(introToJS.student.graduationYear);

