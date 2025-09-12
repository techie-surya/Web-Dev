let btns = document.querySelectorAll("button");

for (let btn of btns){
  btn.addEventListener("click", sayHello);
  btn.addEventListener("click", sayName);
  // btn.addEventListener("dblclick", double);
}

function sayHello(){
  alert("hello!");
};
function sayName(){
  alert("apna college");
};
// function double(){
//   console.log("you double clicked me");
// };