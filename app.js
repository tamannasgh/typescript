//how to dfine type if a function in params
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    else {
        throw new Error("not a valid call");
    }
}
console.log(add(1, 2));
console.log(add("radhey ", "radheyy"));
