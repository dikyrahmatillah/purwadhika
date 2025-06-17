/*
Problem: 
Convert a given number of days into years, months, and days. 
(Note: 1 year = 365 days, 1 month = 30 days)

Solutions:
    1. Define a variable for the total number of days
    2. Calculate years by dividing the total days by 365
    3. Use Math.floor() to round down the number of years
    4. Calculate the remaining days using the formula: remainingDays = totalDays % 365
    5. Calculate months by dividing the remaining days by 30
    6. Use Math.floor() to round down the number of months
    7. Calculate the final remaining days using the formula: remainingDays = remainingDays % 30
*/

const days: number = 366;
const years: number = Math.floor(days / 365);
const remainingDaysAfterYears: number = days % 365;
const months: number = Math.floor(remainingDaysAfterYears / 30);
const remainingDays: number = remainingDaysAfterYears % 30;
console.log(`${years} years, ${months} months, ${remainingDays} days`);
