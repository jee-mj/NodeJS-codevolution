// /*
//   Nested microtask queue
// */

// // nextTick
// process.nextTick(() => console.log("this is process.nextTick1()"));
// process.nextTick(() => {
//   console.log("this is process.nextTick2()");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside process.nextTick()")
//   );
// });
// process.nextTick(() => console.log("this is process.nextTick3()"));
// // Promise
// Promise.resolve().then(() => console.log("this is promise.resolve.then() 1"));
// Promise.resolve().then(() => {
//   console.log("This is promise.resolve.then() 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside promise.resolve.then()")
//   );
// });
// Promise.resolve().then(() => console.log("this is promise.resolve.then() 3"));

// // promise waits for code to resolve then excutes demonstration
// Promise.resolve().then(() => console.log("this is promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick1"));

// async demonstration
console.log("this is console.log 1");
process.nextTick(() => console.log("this is process.nextTick1"));
console.log("this is console.log 3");
