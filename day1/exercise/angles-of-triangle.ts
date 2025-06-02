/*
Problem:
Find angles of a triangle if two angles are given.

Solutions:
    1. Define variables for the two known angles of the triangle
    2. Calculate the third angle using the formula: thirdAngle = 180 - (a + b)
*/

const a: number = 80;
const b: number = 65;
const angle: number = 180 - (a + b);
console.log(angle);
