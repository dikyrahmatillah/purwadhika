function sumNumber(arr: any[]) {
  const result = arr.filter((item) => typeof item === "number");
  return result.reduce((sum, index) => sum + index);
}

console.log(sumNumber(["3", 1, "string", null, false, undefined, 2]));
