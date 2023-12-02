const fs = require("node:fs");

fs.readFile(__filename, () => {
  console.log("this is fs.readFile() 1"); // fourth
});
process.nextTick(() => console.log("this is process.nextTick() 1")); // first
Promise.resolve().then(() => console.log("this is Promise.resolve.then() 1")); // third
setTimeout(() => console.log("this is setTimeout() 1"), 0); // second

for (let i = 0; i < 2000000000; i++) {}

// // outer loop can be executed in any order
// const fs = require("node:fs");

// setTimeout(() => console.log("this is setTimeout() 1"), 0); // 0 overrides to 1 ms

// fs.readFile(__filename, () => {
//   console.log("this is fs.readFile() 1");
// });

// // microtask queue has higher priority than io queue
// const fs = require("node:fs");

// fs.readFile(__filename, () => {
//   console.log("this is fs.readFile() 1");
// });

// process.nextTick(() => console.log("this is process.nextTick() 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve.then() 1"));
