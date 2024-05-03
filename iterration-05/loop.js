let arr = ["india", "america","newzealand","manali"];
for (const str of arr) {
    // console.log(str)
}

let str = "hello computer";
for (const val of str) {
    if (val==" ") {
        continue;
    }
// console.log(`value is - ${val}`);
}

let map = new Map();
map.set("IN", "INDIA");
map.set("usa","united state america")
map.set("FR","france");

 for (const [key,value] of map) {
    // console.log(key , "->", value);
    
 }

 const myObject = {
    js: "javascript",
    cpp : "c++",
    py : "python",
    rb: "RUbi"
    
 }
for (const key in myObject) {
    console.log(key);
}
 