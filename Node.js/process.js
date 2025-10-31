let n = 7;

let args = process.argv;

for (let i = 2; i < n; i++) {
  console.log("hello to", args[i]);
}

//In TERMINAL

// PS A:\WebDev-AC\Node.js> node process.js  surya suman debasis subham asish

//OUTPUT:
// hello to surya
// hello to suman
// hello to debasis
// hello to subham
// hello to asish