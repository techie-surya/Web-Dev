let btns = document.querySelectorAll("button");
// console.dir(btn);

// btn.onclick = function () {
//   console.log("button was clicked");
// };

function sayHello(){
  alert("hello!");
};

for (let btn of btns){
  btn.onclick = sayHello;
  btn.onmouseenter = function(){
    console.log("you entered aa button");
  }
}
