

function sayMyName() {
    console.log("t")
    console.log("a")
    console.log("r")
    console.log("u")
    console.log("n")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
     // return result            //result k baad type kia kuch print nhi hoga
     return number1 + number2
}

const result = addTwoNumbers(3,4)

// console.log("Result: ",  result);

function loginUserMessage(username = "taru"){
    if(!username ){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}
// console.log(loginUserMessage("tarun"))
// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
    return num1

}

// console.log(calculateCartPrice(20, 50, 100))

const user = {
    username: "tarun",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "tushar",
    price: 388
})

const myNewArray =[200, 100, 300, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,100, 300, 500]))