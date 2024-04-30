//the string length method
let p = "This is my string";
console.log(p.length)


//extracting parts of a string
/**
 * slice()
 * substring()
 * substr()
 * using array method
 * .includes
 */

//slice method

let r = "Hello and Good morning."
let r2 = r.slice(-7)
console.log(r2)

//substring() method

let r3 = r.substring(0, 7);
console.log(r3)

//substr method
 let r4 = r.substr(4, 6);
 console.log(r4);

//using includes, startsWith(), endsWith();

if (r.includes("mornin")) {
    let r5 = r.replace("morn", "night");
    console.log(r5);
} else{
    console.log("string not found");
}

console.log(r.endsWith("morning."))

let t = "i live in the city of abuja";

//toUpperCase .toLowerCase

let t2 = t.toUpperCase();
console.log(t2)
console.log(t2.toLowerCase());

//to use split() and join()

let t3 = t.split("i");
console.log(t3)