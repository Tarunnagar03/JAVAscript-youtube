const score = 400
//console.log(score);

const balance = new Number(200)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 23.8916

//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

//******************* Maths ********//


//console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(5.67));
//console.log(Math.ceil(4.23));
//console.log(Math.floor(4.85));
//console.log(Math.min(4,6,1,0));
//console.log(Math.max(0,5,4,3,2));

console.log(Math.random());   // 0-1 ke bich value dega
console.log((Math.random()*10) +1);    //
console.log(Math.floor(Math.random()*10) +1); // it may give zero ...so we add one iise hoga one se leke 9 tk value dega

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min)  
//min -max krke range aagai fir 1 add kra taki value zero na aaye..then add kia min taki isse kam na ho
     