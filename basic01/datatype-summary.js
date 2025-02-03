// Prmitive

//******  7 types : String ,Number, Boolean, Null, undefined, Symbol, BigInt *******//

const score = 100
const scorevalue = 10003

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log (id === anotherId);

//const bigNumber = 745787807488854587245878n

 // Refrence  (Non Primitve)

   // Array, Objects, Functions

   const friends = ["anat", "tushar","shruti"]
  let myobj = {
    name: "tarun",
    age: 22,
   }

   const myFunction= function(){
    console.log("hello");
   }

   console.log(typeof id);