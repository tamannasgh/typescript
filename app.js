function abc(a, b) {
    //if i write b. i will see all the options i can use with strings same goes with a
}
// abc(); //this will give error
abc(1, "tamanna"); //and  have to pass only 2 arg and of exact type as defined
function greetUser(user) {
    console.log("hey ".concat(user.name, "!")); //now when i wrote user. it automatically gave me name and age sugestions
}
//and if a call greetUser i have to pass user object with exact same props and types as User interface
greetUser({ name: "tamanna", age: 18 }); //still work if i dont give gender as it is otional
greetUser({ name: "ishika", age: 23, gender: "female" });
function adminThing(obj) {
    //now here you will see all props af User + Admin interface
}
function mergeTest(obj) {
    //if you do obj. you can see we are getting name email and age
}
var num; //now this is equivilant to let num:number
var b; //now you see how better it is
function something(obj) {
    //this will have name, age and get detalis function
}
