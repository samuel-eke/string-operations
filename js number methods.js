/**
 * toString()
 * toExponential ()
 * toFixed()
 * parseInt()
 * parseFloat()
 * Math Class
 * Math.random()
 * Math.sqrt()
 */

//toString method

let a = 87;
let b = 13;
let c = a.toString() + b.toString();
console.log(c);

//toExponential()

let t = 2.2;
console.log(t.toExponential(2))

//toFixed()

let r = 25.4862;
console.log(r.toFixed(2))

//toPrecision()

let p = 238.233857;
console.log(p.toPrecision(7));

//toParseInt()

// let ll = parseInt(prompt("Enter a number"));
// console.log(ll * 2);

let i = 5 * Math.random()
console.log(i);

