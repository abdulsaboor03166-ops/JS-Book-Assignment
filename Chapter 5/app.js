// CHAPTER 5 


// Question 1

document.write("Sum of 3 and 8 is: " + (3 + 8) + "<br><br>");

// Question 2

document.write("Subtraction: " + (3 - 5) + "<br>");
document.write("Multiplication: " + 3 * 5 + "<br>");
document.write("Division: " + 3 / 5 + "<br>");
document.write("Modulus: " + (3 % 5) + "<br><br>");

// Question 3

let number;
document.write("Value after variable declaration is: " + number + "<br>");
number = 5;
document.write("Initial value: " + number + "<br>");
number++;
document.write("Value after increment is: " + number + "<br>");
number = number + 7;
document.write("Value after addition is: " + number + "<br>");
number--;
document.write("Value after decrement is: " + number + "<br>");
let remainder = number % 3;
document.write("The remainder is: " + remainder + "<br><br>");

// Question 4

let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.write(
  "Total cost to buy 5 tickets to a movie is " + totalCost + " PKR<br><br>",
);

// Question 5
document.write("<h1>Table of 4</h1>");
document.write(
  "4x1=4 <br> 4x2=8 <br> 4x3=12 <br> 4x4=16 <br> 4x5=20 <br> 4x6=24 <br> 4x7=28 <br> 4x8=32 <br> 4x9=36 <br> 4x10=40 <br><br>",
);

// Question 6

let celsiusTemperature = 25;
let fahrenheitFromC = (celsiusTemperature * 9) / 5 + 32;
document.write(celsiusTemperature + "°C is " + fahrenheitFromC + "°F<br>");

let fahrenheitTemperature = 70;
let celsiusFromF = ((fahrenheitTemperature - 32) * 5) / 9;
document.write(fahrenheitTemperature + "°F is " + celsiusFromF + "°C<br><br>");

// Question 7
document.write("<h1>Shopping Cart</h1>");
let PriceItem1 = 650;
let QuantityItem1 = 3;
let PriceItem2 = 100;
let QuantityItem2 = 7;
let ShippingCharge = 100;
let totalCartCost =
  PriceItem1 * QuantityItem1 + PriceItem2 * QuantityItem2 + ShippingCharge;

document.write("Price of item 1 is " + PriceItem1 + "<br>");
document.write("Quantity of item 1 is " + QuantityItem1 + "<br>");
document.write("Price of item 2 is " + PriceItem2 + "<br>");
document.write("Quantity of item 2 is " + QuantityItem2 + "<br>");
document.write("Shipping Charges " + ShippingCharge + "<br>");
document.write("Total cost of your order is " + totalCartCost + "<br><br>");

// Question 8
document.write("<h1>Marks Sheet</h1>");
let TotalMarks = 1100;
let MarksObtain = 810;
let Percentage = (MarksObtain / TotalMarks) * 100;

document.write("Total Marks: " + TotalMarks + "<br>");
document.write("Marks Obtained: " + MarksObtain + "<br>");
document.write("Percentage: " + Percentage + "%<br><br>");

// Question 9
document.write("<h1>Currency in PKR</h1>");
let TotalCurrency = 10 * 104.8 + 25 * 28;
document.write("Total Currency in PKR: " + TotalCurrency + "<br><br>");

// Question 10

let calcResult = ((10 + 5) * 10) / 2;
document.write(
  "Result of single expression arithmetic: " + calcResult + "<br><br>",
);

// Question 11
document.write("<h1>Age Calculator</h1>");
let year = 2026;
let birthyear = 2003;
let calculatedAge = year - birthyear;

document.write("Current Year: " + year + "<br>");
document.write("Birth Year: " + birthyear + "<br>");
document.write("Your Age: " + calculatedAge + "<br><br>");

// Question 12
document.write("<h1>The Geometrizer</h1>");
let RadiusofCircle = 20;
let pi = 3.142;
let circumference = 2 * pi * RadiusofCircle;
let Areaofcircle = pi * RadiusofCircle ** 2;

document.write("Radius of a circle: " + RadiusofCircle + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The Area is: " + Areaofcircle + "<br><br>");

// Question 13
document.write("<h1>The Lifetime Supply Calculator</h1>");
let FavouriteSnack = "Chocolate Chip";
let currentAge = 19;
let EstimatedAge = 65;
let AmountPerDay = 3;
let totalSnacksNeeded = (EstimatedAge - currentAge) * 365 * AmountPerDay;

document.write("Favourite Snack: " + FavouriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + EstimatedAge + "<br>");
document.write("Amount of Snack per Day: " + AmountPerDay + "<br>");
document.write(
  "You will need " +
    totalSnacksNeeded +
    " " +
    FavouriteSnack +
    " to last you until the ripe old age of " +
    EstimatedAge,
);