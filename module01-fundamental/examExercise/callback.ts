// function calculator(a: number, b: number, operation: Function) {
//   return operation(a, b);
// }

// console.log(calculator(4, 2, (x: number, y: number) => x + y));

// function step1(callback) {
//   console.log("Step 1");
//   callback();
// }

// function step2(callback) {
//   console.log("Step 2");
//   callback();
// }

// function step3() {
//   console.log("Step 3");
// }

// step1(() => {});
// step2(() => {});
// step3();

// step1(() => {
//   step2(() => {
//     step3();
//   });
// });

// interface User {
//   name: string;
//   email: string;
// }

// function validateUser(user: User) {
//   if (typeof user.name !== "string") {
//     throw "Name must be string";
//   }
//   if (!user.email.includes("@")) {
//     throw "Invalid Email format";
//   }
//   console.log("User is valid");
// }

// try {
//   validateUser({ name: "123", email: "invalidmail.com" });
// } catch (error) {
//   console.log(error);
// }

// function exerciseEventLoop() {
//   console.log("Exercise 1");
//   console.log("1");
//   setTimeout(() => console.log("2"), 0);
//   Promise.resolve().then(() => console.log("3"));
//   Promise.resolve().then(() => {
//     console.log("4");
//     setTimeout(() => console.log("5"), 0);
//   });
//   console.log(6);
// }
// exerciseEventLoop(); //execercise 1, 1, 6, 3, 4,  2, 5,

// async function execerciseAsyncErrors() {
//   try {
//     console.log("A");

//     const result = await new Promise<string>((res, rej) => {
//       setTimeout(() => {
//         console.log("B");
//         rej("Something went wrong");
//       }, 100);
//     });

//     console.log("C");
//     return result;
//   } catch (err) {
//     console.log("D");
//     console.log("Error Caught:", err);
//     return "recovered";
//   } finally {
//     console.log("E");
//   }

//   console.log("F");
// }

// execerciseAsyncErrors().then((result) => console.log("Final result:", result)); // ABD Error caught, recoverd, E

// function exercisePromiseChains() {
//   return Promise.resolve(10)
//     .then((value) => {
//       console.log("Step1:", value);
//       return value * 2;
//     })
//     .then((value) => {
//       console.log("Step 2:", value);
//       if (value > 15) {
//         throw new Error("value too high!");
//       }
//       console.log("ara");
//       return value + 5;
//     })
//     .then((value) => {
//       console.log("Step 3:", value);
//       return value;
//     })
//     .catch((error) => {
//       console.log("Caught error:", error.message);
//       return 0;
//     })
//     .then((value) => {
//       console.log("Step 4:", value);
//       return value + 100;
//     });
// }

// exercisePromiseChains().then((result) => console.log("CHain result", result));

// //step 1: 10 //20
// //step 2: 20
// //Caught error: value too high
// //0

// interface User {
//   name: string;
//   age: number;
//   greet?: () => string;
//   createdAt?: Date;
//   settings?: {
//     theme: string;
//     notifications: boolean;
//   };
// }

// function exerciseJsonSerialization() {
//   const user: User = {
//     name: "Alice",
//     age: 30,
//     greet: () => "Hello!",
//     createdAt: new Date("2024-01-01"),
//     settings: {
//       theme: "dark",
//       notifications: true,
//     },
//   };

//   console.log("Original object:", user);

//   const jsonString = JSON.stringify(user);
//   console.log("JSON string", jsonString);

//   const parsed = JSON.parse(jsonString) as User;
//   console.log("Parsed object:", parsed);

//   console.log("Original greet type:", typeof user.greet);
//   console.log("Parsed greet type:", typeof parsed.greet);
//   console.log("Original greet value:", parsed.greet);

//   console.log("Original createdAt type:", typeof user.createdAt);
//   console.log("Parsed createdAt type:", typeof parsed.createdAt);
// }

// exerciseJsonSerialization();

// function exerciseTryCatchLimitations() {
//   console.log("Scenario 1 - setTimeout in try/catch");

//   try {
//     setTimeout(() => {
//       throw new Error("Async error");
//     }, 100);
//     console.log("After setTimeout setup");
//   } catch (error) {
//     console.log("Caught setTimeout error", error);
//   }

//   //   console.log("Scenario 2 - Promise with try/catch");
//   //   async function testPromiseError() {
//   //     try {
//   //       await new Promise((resolve, reject) => {
//   //         setTimeout(() => {
//   //           reject(new Error("Async error in Promise"));
//   //         }, 200);
//   //       });
//   //       console.log("After setTimeout setup");
//   //     } catch (error) {
//   //       console.log("Caught promise error:", error);
//   //     }
//   //   }

//   //   testPromiseError();
// }

// exerciseTryCatchLimitations();

function exerciseTaskQueues() {
  console.log("Start");

  //macro task
  setTimeout(() => console.log("Timeout 1"), 0);

  //micro task
  Promise.resolve().then(() => console.log("Promise 1"));

  //macro task
  setTimeout(() => console.log("Timeout 2"), 0);

  //micro task
  Promise.resolve().then(() => {
    console.log("Promise 2");

    //nested micro task
    Promise.resolve().then(() => console.log("Nested Promise"));
  });

  //another micro task
  queueMicrotask(() => console.log("Micro Task"));

  console.log("End");
}
exerciseTaskQueues(); //start, end, promise 1, promise 2, micro stack, nested prmise, timeout 1, timeout 2
