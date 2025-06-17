const myPromise = new Promise((resolve, reject) => {
  if (true) {
    return resolve("Promise resolve");
  } else {
    return reject("Promise rejected");
  }
});

// 1. Dot then
// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Promise finished!");
//   });

// 2. Async/Await
const getMyPromise = async () => {
  try {
    console.log(await myPromise);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Promise finished!");
  }
};

getMyPromise();
/* ---------------------------------- NOTE ---------------------------------- */
// const date = new Date();
// const error = new Error();

// const arrayNum = [1, 2, 3];
// arrayNum.map((item, index) => {});

// npm install -g tsx
// npm list -g

// Real Case Example
