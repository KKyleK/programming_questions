obj = {
    name: "kyle",
    color: "blue"
}

console.log(obj.color);  //Basic object syntax
console.log(obj['color']); //Or

if ("name" in obj) {
    console.log("Yup");
}

const test = "co";
const test2 = "lor";

console.log(obj.test);  //This searches for the key "test"
console.log(obj[test + test2]); //This searches for the key "color"