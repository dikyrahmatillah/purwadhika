/*
Problem:
Calculate the difference in days between two dates.

Solutions:
    1. Define two date variables with specific dates
    2. Get the time in milliseconds for each date using getTime()
    3. Substract the two times to get the difference in milliseconds
    4. Use Math.abs() to ensure the difference is positive
    5. Convert the difference from milliseconds to days by dividing by (1000 * 3600 * 24)
    6. Use Math.ceil() for inclusive of the end date
    or use Math.floor() for exclusive of the end date
*/

const date1: Date = new Date("2022-01-1");
const date2: Date = new Date("2022-01-29");

const diffDate: number = Math.abs(date1.getTime() - date2.getTime());
const diffDays: number = Math.ceil(diffDate / (1000 * 3600 * 24));
console.log(diffDays);
