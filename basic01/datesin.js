// Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);
//console.log(myDate.toTimeString());
//console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2025, 0, 14,)  // month start from zero in javascript
// let myCreatedDate = new Date(2025, 0, 14, 5, 3) 
let myCreatedDate = new Date("2025-01-14")
// console.log(myCreatedDate.toLocaleString());


// for exact time we use timestamp

let myTimeStamp =Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "short",
})