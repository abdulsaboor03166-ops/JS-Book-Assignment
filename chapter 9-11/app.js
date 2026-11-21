// Q 1

// let city = prompt("Please enter your City: ");

// if (city === "Karachi" || city === "karachi") {
//     alert("Welcome to the city of lights!");
// }   

// Q 2

// let gender = prompt("Please enter your Gender: ");

// if (gender === "male" || gender === "Male") {
//     alert("Good Morning Sir!");
// }
// else { gender === "female" || gender === "Female"
//     alert("Good Morning Ma'am!");
// }

// Q3

// let color = prompt ("Please enter the color of traffic signal: ");

// if (color === "red" || color === "Red") {
//     alert("Must Stop");
// }

// else if (color === "yellow" || color === "Yellow") {
//     alert("Ready to move");
// }   

// else if (color === "green" || color === "Green") {
//     alert("Move now");
// }   

// Q4

// let fuel = prompt("Please enter the remaining fuel in your car (in litres): ");

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

// else {
//     alert("You have enough fuel in your car");
// }


// Q5

// let a = 4;

// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// let b = 82;

// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// let c = 12; 

// if (c++ === 13) {
//     alert("condition 1 is true");
// }

// if (c === 13) {
//     alert("condition 2 is true");
// }       

// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }

// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// Q6


// let totalMarks = 300;

// let marksObtained = +prompt("Please enter your marks obtained: ");

// let percentage = (marksObtained / totalMarks) * 100;

// if (percentage >= 80) {
//     alert("Grade: A-one\nRemarks: Excellent");
// }

// else if (percentage >= 70) {
//     alert("Grade: A\nRemarks: Good");
// }

// else if (percentage >= 60) {
//     alert("Grade: B\nRemarks: You need to improve");
// }

// else {
//     alert("Grade: Fail\nRemarks: Sorry");
// }

// Q7

let secretNumber = 7;

let guess = +prompt("Guess a number between 1 and 10:");

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
}
else if (guess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}
else {
    alert("Sorry! Wrong answer");
}
