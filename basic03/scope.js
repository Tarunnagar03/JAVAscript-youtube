// var c = 300      /// global scope    iski value block scope m jani chiye

let a = 400
if (true) {        //block scope    value bhar nhi jani chiye
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
}

console.log(a);
// console.log(b);
//console.log(c);