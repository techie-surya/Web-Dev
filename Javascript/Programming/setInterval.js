let id =setInterval ( () => {
  console.log("Apna College")
}, 2000);

// let id2 =setInterval( () => {
//   console.log("Hello world")
// }, 3000);

setTimeout(() => {
  clearTimeout(id);
}, 12000);
