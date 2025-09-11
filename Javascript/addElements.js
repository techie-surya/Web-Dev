let newP = document.createElement("p");
console.dir(newP);

newP.innerText = "Hi, I am a new P.\n";

let body = document.querySelector("body");
body.appendChild(newP);

let div = document.querySelector("#hello");
div.appendChild(newP)

let btn = document.createElement("button");
console.dir(btn);

btn.innerText = "click me!";
div.appendChild(btn);

newP.append("This is my new text.");

div.prepend(btn);

let bttn = document.createElement("button");
bttn.innerText = "New Button!!";

let p1 = document.querySelector("#p1")
p1.insertAdjacentElement("beforebegin",bttn);

// div.removeChild(btn);