// singleton    ... constructor will form singleton  not by literals

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "tarun",
    fullname: "tarun nagar",
    [mySym]: "mykey1",
    age: 20,
    location: "Meerut",
    email:"tarun@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

// console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["fullname"])
//console.log(JsUser[mySym])


JsUser.email ="ronit@gmail.com"
// Object.freeze(JsUser)
JsUser.email ="ronit@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`helo js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());