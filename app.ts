//how to dfine type if a function in params

// function sum(a: number, b: number, cb: (sum: number) => void): void {
// 	cb(a + b);
// }

// function callBack(sum: number): void {
// 	console.log(sum);
// }

// sum(1, 2, callBack);

// let fun = (sum: number):void =>{
// 	console.log(sum);
// }

//optiona and default parameters

// function user(
// 	name: string,
// 	age: number,
// 	gender: string = "not to be disclosed"
// ): void {
// 	//just put '?' like this
// 	console.log(name, age, gender);
// }

// user("tamanna", 18, "female");
// user("ishika", 23); //optional h to valid call

//rest parameters

// function sum(...nums: number[]): number {
// 	let sum = 0;
// 	nums.forEach((n) => (sum += n));
// 	return sum;
// }

// console.log(sum(1, 2, 3, 4, 5));

//function overloading

// function greet(): void;
// function greet(msg: string): void;

// function greet(msg?: any): void {
// 	if (!msg) {
// 		console.log("radheyy radheyyyy");
// 	} else {
// 		console.log(msg);
// 	}
// }

// greet();
// greet("radhey krishna!");

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(...nums: number[]): number;
function add(...strs: string[]): string;

function add(a: any, b: any): any {
	if (typeof a === "number" && typeof b === "number") {
		return a + b;
	} else if (typeof a === "string" && typeof b === "string") {
		return a.concat(b);
	} else {
		throw new Error("not a valid call");
	}
}

console.log(add(1, 2));
console.log(add("radhey ", "radheyy"));
