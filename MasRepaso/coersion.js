// coercion explicita
let a = 20;
let b = a + "";
console.log(typeof(b));

let c = String(a);
let d = Number(c);
// coercion implicita
let b = a + "";
var e = 4 * "7";

