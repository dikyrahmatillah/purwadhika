function primitive(arr: any[]) {
  return arr.filter((v) => typeof v !== "object");
}

console.log(primitive([1, [], undefined, {}, "string", {}, []]));
// console.log(typeof {});
