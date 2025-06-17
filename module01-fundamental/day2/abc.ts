const value: string = "Alice";
const result: number | string = value && "True";

console.log(result);

const name: string = "Alice";
const displayName: string = name || "Wonderland";

console.log(displayName);
