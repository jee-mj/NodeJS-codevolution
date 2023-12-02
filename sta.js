setTimeout(() => console.log("this is setTimeout() 1"), 1000);
setTimeout(() => console.log("this is setTimeout() 2"), 500);
setTimeout(() => console.log("this is setTimeout() 3"), 0);

// // setTimeout() and nextTick() interactions
// setTimeout(() => console.log("this is setTimeout() 1"), 0);
// setTimeout(() => {
//   console.log("this is setTimeout() 2");
//   process.nextTick(() => {
//     console.log("this is the inner nextTick() inside setTimeout()");
//   });
// }, 0);
// setTimeout(() => console.log("this is setTimeout() 3"), 0);

// /*
//   Nested microtask queue
// */

// // nextTick
// process.nextTick(() => console.log("this is process.nextTick1()"));
// process.nextTick(() => {
//   console.log("this is process.nextTick2()");
//   process.nextTick(() =>
//     console.log("this is the inner nextTick() inside process.nextTick()")
//   );
// });
// process.nextTick(() => console.log("this is process.nextTick3()"));
// // Promise
// Promise.resolve().then(() => console.log("this is promise.resolve.then() 1"));
// Promise.resolve().then(() => {
//   console.log("This is promise.resolve.then() 2");
//   process.nextTick(() =>
//     console.log("this is the inner nextTick() inside promise.resolve.then()")
//   );
// });
// Promise.resolve().then(() => console.log("this is promise.resolve.then() 3"));

// // promise waits for code to resolve then excutes demonstration
// Promise.resolve().then(() => console.log("this is promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick1"));

// // async demonstration
// console.log("this is console.log 1");
// process.nextTick(() => console.log("this is process.nextTick1"));
// console.log("this is console.log 3");
