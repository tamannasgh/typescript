// function fun<T>(arg: T, num: number): void {}

// fun<string>("hey", 3);
// fun("tamanna", 18);

function getFirstElm<T>(arr: T[]): T {
	return arr[0];
}

let nums = [1, 2, 3, 4, 5];
let strs = ["hello", "tamanna", "sharma"];
console.log(getFirstElm(nums));
console.log(getFirstElm(strs));

function logLength<T extends { length: number }>(item: T): void {
	console.log(item.length);
}

logLength("hey");
// logLength(1); //error as it doesn't have a poperty named length
