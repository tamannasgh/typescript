function abc(a: number, b: string) {
	//if i write b. i will see all the options i can use with strings same goes with a
}

// abc(); //this will give error
abc(1, "tamanna"); //and  have to pass only 2 arg and of exact type as defined

interface User {
	name: string;
	age: number;
	gender?: string; //optional property
}

function greetUser(user: User) {
	console.log(`hey ${user.name}!`); //now when i wrote user. it automatically gave me name and age sugestions
}

//and if a call greetUser i have to pass user object with exact same props and types as User interface

greetUser({ name: "tamanna", age: 18 }); //still work if i dont give gender as it is otional

greetUser({ name: "ishika", age: 23, gender: "female" });

//extending interfaces

interface Admin extends User {
	admin: boolean; //yeah its useless but its for learning so its okk
}

function adminThing(obj: Admin) {
	//now here you will see all props af User + Admin interface
}

interface Tamanna {
	name: string;
}

interface Tamanna {
	email: string;
	age: number;
}

function mergeTest(obj: Tamanna) {
	//if you do obj. you can see we are getting name email and age
}

//type aliases

type sankhya = number;

let num: sankhya; //now this is equivilant to let num:number

type myType = string | number | { name: string; age: number | string };

let b: myType; //now you see how better it is

// union and intersection

type user = {
	name: string;
	age: number;
};

type admin = user & {
	getDetails(user: user): void;
};

function something(obj: admin) {
	//this will have name, age and get detalis function
}
