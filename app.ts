// class Animal {
// 	constructor(
// 		public name: string, //this is accessible everywhere
// 		protected color: string, //this color is accessible only in this class and the subclasses Dog
// 		private readonly gender: string //this gender is not accessible in Dog class and not in code body onbviosly
// 	) {}

// 	getGender(): string {
// 		return this.gender;
// 	} //gender was shoeing that value never read because it could be access only like this and we had not anything like that so it would be fix with this.
// 	//changeGender(gender: string): void {this.gender = gender;}   //it will give error as this is readonly
// }

// class Dog extends Animal {
// 	private dogName: string; //as this is private its only accessible in this class animal class connot access it so cant initialize
// 	constructor(name: string, color: string, gender: string, dogname: string) {
// 		super(name, color, gender);
// 		this.dogName = dogname; //so we are initializing it here
// 	}
// }

// let anm1 = new Animal("dog", "white", "male");
// let dog1 = new Dog("dog", "black", "male", "kira");
// console.log(dog1);

//----------------------------------------------------------------

//getters and setters

// class User {
// 	constructor(private _name: string, protected age: number) {}

// 	get name(): string {
// 		return this._name;
// 	}

// 	set name(name: string) {
// 		//setters ki return value nhi hoti
// 		this._name = name;
// 	}
// }

// let user1 = new User("tamanna", 18);
// console.log(user1.name);
// user1.name = "ishika";
// console.log(user1.name);

//-----------------------------------------------------------------------

//static members

// class User {
// 	static userCount = 3;

// 	static sayHello() {
// 		console.log("hello");
// 	}
// }

// console.log(User.userCount);
// User.sayHello();

//-----------------------------------------------------------------------

//abstract class

// class Payment {
// 	constructor(protected amount: number) {}
// }

// class Paytm extends Payment {
// 	constructor(amount: number, private commission: number) {
// 		super(amount);
// 	}
// }

// class Gpay extends Payment {
// 	constructor(amount: number, private commission: number) {
// 		super(amount);
// 	}
// }
