let num = 10; //number (let a:number;)

let str = "tamanna"; //string (let str: string;)

let bool = true; //boolean (let bool: boolean;)

let arr = [1, 2, 3, "tamanna", { name: "tamanna" }]; //arr of string or number or object which have a prop name of typr string
//if we want to say we want an array of numbers ONLY

let numArr: number[] = [1, 2, 3]; //we are explicitly saying that this numArr is number of array (number[])

let user: { name: string; age: number } = { name: "tamanna", age: 18 };
//we are telling that this user us a object that have 2 properties name which is of type string and age of type number

//tuples are just like array just that we know exact number of elements and type of them (usestate know exactly that it will have 2 values first the type given when calling and seconnd is setter function agr smjh aaya to thik nhi to koi ni bss dimag mei aaya to likh diya)

let tup: [string, number] = ["tamanna", 18]; //tis is a tuple that has only 2 elements first is of type string and second of type number

//its full of error that saying something like block scope we will come to thiss soonnn

let badPractice; //any let badPractice:any;

badPractice = 5;
badPractice = "hehe";

//we are again writing the js means we are cutting off typescripts al super powers so we should never use it

function print(): void {
	console.log("hey wecome!");
	// retrun 1; //error as i have said that the return type will be void
}

let welcome = print(); //if i hover to the welcome variable its showing the type void.

enum statusCodes {
	notFound = 404,
	success = 200,
} //

console.log(statusCodes.success);

//what are enums are written in notes at https://ribbon-buffalo-067.notion.site/Typescript-134fee81f6468004ab0ec039783e73d0?pvs=4
