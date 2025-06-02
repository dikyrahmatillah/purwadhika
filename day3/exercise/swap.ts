const text: string = "The QuiCk BrOwN Fox";
let result: string = "";

for (let i = 0; i < text.length; i++)
  if (text[i] === text[i].toUpperCase()) {
    result += text[i].toLowerCase();
  } else {
    result += text[i].toUpperCase();
  }

console.log(result);
