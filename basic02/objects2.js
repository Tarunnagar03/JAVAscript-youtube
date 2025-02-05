// now we disscus how can we  singleton object in literals and construct

const tinderUser = {}
tinderUser.id = "12abs"
tinderUser.name =" tarun"
tinderUser.isLoggedIn = false

// console.log (tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "tarun",
            lastname: "nagar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 ={ obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 ={...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "tarun@google.com"
    },
    {
        id:1,
        email: "tarun@ggogle.com"
    },
    {
        id: 1,
        email:"tarun@google.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLooged'));

