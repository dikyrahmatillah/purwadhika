const days: number = 364;
const daysInMonth = 30.44;

let calculatedYears: number = 0;
let daysLeftForYearCalc: number = days;
let yearIterationCounter: number = 0;

while (true) {
  yearIterationCounter++;
  let daysInCurrentYear = 365;
  if (yearIterationCounter % 4 === 0) {
    daysInCurrentYear = 366;
  }

  if (daysLeftForYearCalc >= daysInCurrentYear) {
    daysLeftForYearCalc -= daysInCurrentYear;
    calculatedYears++;
  } else {
    break;
  }
}

let years: number = calculatedYears;
let remainingDaysAfterYears: number = daysLeftForYearCalc;

let months: number = Math.floor(remainingDaysAfterYears / daysInMonth);
let remainingDaysValue: number = remainingDaysAfterYears - months * daysInMonth;
let remainingDays: number = Math.ceil(remainingDaysValue);

console.log(
  `${days} days is approximately ${years} years, ${months} months, and ${remainingDays} days.`
);
