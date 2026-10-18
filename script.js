console.log("--- Task 6 ---");
const fullName = "Anelya Narimanova";
let age = 18;
let isStudent = true;
let favoriteColor = "light pink";

console.log("fullName:", fullName, typeof fullName);
console.log("age:", age, typeof age);
console.log("isStudent:", isStudent, typeof isStudent);
console.log("favoriteColor:", favoriteColor, typeof favoriteColor);

age = 19;
console.log("Updated age:", age);


console.log("\n--- Task 7 ---");
let userName = prompt("Enter your name:");
if (userName) {
    alert("Hello, " + userName + "!");
}

const myName = "Anelya Narimanova";
const myGroup = "MT-2502";
const greetingString = `Student: ${myName}, Group: ${myGroup}`;
console.log(greetingString);


console.log("\n--- Task 8 ---");
let num1Input = prompt("Enter the first number:");
let num2Input = prompt("Enter the second number:");

let num1 = Number(num1Input);
let num2 = Number(num2Input);

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);


console.log("\n--- Task 9 ---");
const textName = "Anelya Narimanova";
console.log("Length:", textName.length);
console.log("Uppercase:", textName.toUpperCase());
console.log("Lowercase:", textName.toLowerCase());
console.log("First 3 characters:", textName.slice(0, 3));

let str1 = "JavaScript is";
let str2 = "a powerful programming language.";
console.log(str1 + " " + str2);


console.log("\n--- Task 10 ---");
let counter = 10;
console.log("Initial:", counter);
counter++;
console.log("++:", counter);
counter--;
console.log("--:", counter);
counter += 5;
console.log("+= 5:", counter);
counter -= 3;
console.log("-= 3:", counter);
counter *= 2;
console.log("*= 2:", counter);
counter /= 4;
console.log("/= 4:", counter);


console.log("\n--- Task 11 ---");
function calculateHumanAge(dogAge) {
    let humanAge = (dogAge - 2) * 4 + 21;
    console.log(`Dog age: ${dogAge}, Equivalent human age: ${humanAge}`);
}
calculateHumanAge(2);
calculateHumanAge(5);


console.log("\n--- Task 12 ---");
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

function calculateSum(a, b) {
    return a + b;
}

function calculateRectangleArea(width, height) {
    return width * height;
}

greetUser("Alice");
greetUser("Bob");

console.log("Sum (10, 20):", calculateSum(10, 20));
console.log("Sum (7, 3):", calculateSum(7, 3));

console.log("Area (5, 4):", calculateRectangleArea(5, 4));
console.log("Area (10, 15):", calculateRectangleArea(10, 15));