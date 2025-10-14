h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
    h1.style.color = color;
    resolve("color changed!")
  }, delay);
  })
}

async function demo() {
  await changeColor("red", 1000);
  await changeColor("orange", 1000);
  await changeColor("green", 1000);
  await changeColor("yellow", 1000);
  await changeColor("blue", 1000);
}

demo();

// changeColor("red", 1000)
// .then(() => {
//   console.log("red color was completed");
//   return changeColor("orange", 1000);
// })
// .then(() => {
//   console.log("orange color was completed");
//   return changeColor("green", 1000);
// })
// .then(() => {
//   console.log("green color was completed");
//   return changeColor("yellow", 1000);
// })
// .then(() => {
//   console.log("yellow color was completed");
//   return changeColor("blue", 1000);
// })
// .then(() => {
//   console.log("blue color was completed");
// })

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });
