/*
Problem:
Calculate the diameter, circumference, and area of a circle given its radius.

Solutions:
• Diameter 
    1. Define a variable for the radius
    2. Calculate the diameter using the formula: diameter = 2 * radius

• Circumference
    1. Define a variable for the radius
    2. Calculate the circumference using the formula: circumference = 2 * π * radius
    3. Use toFixed() to format the output to a specific number of decimal places

• Area of Circle
    1. Define a variable for the radius
    2. Calculate the area using the formula: area = π * radius^2 (use ** for exponentiation)
    3. Use toFixed() to format the output to a specific number of decimal places

Note: Use Math.PI for a more accurate value of π
*/

const radius: number = 5;
const pi: number = Math.PI;

// Calculate the diameter
const diameter: number = 2 * radius;
console.log(diameter);

// Calculate the circumference
const circumference: number = 2 * pi * radius;
console.log(circumference.toFixed(4));

// Calculate the area
const area: number = pi * radius ** 2;
console.log(area.toFixed(3));
