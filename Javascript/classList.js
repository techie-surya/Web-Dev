let heading = document.querySelector("div");
console.log(heading.classList);

heading.classList.add("abc");
console.log(heading.classList);

// heading.classList.remove("abc");
   
console.log(heading.classList.contains("abc"));
console.log(heading.classList.contains("mnl"));

console.log(heading.classList.toggle("mnl"));