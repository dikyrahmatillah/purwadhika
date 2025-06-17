const strInput: string = "An apple a day keeps the Doctor away";
const hideLetter: string = "P".toLowerCase();
let result: string = "";

for (let i = 0; i < strInput.length; i++) {
  const currChar: string = strInput[i];
  if (currChar.toLowerCase() == hideLetter) {
    result += "*";
  } else {
    result += currChar;
  }
}

console.log(result);
