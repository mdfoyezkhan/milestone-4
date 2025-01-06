const age = 20;
// if(age > 18){
//     console.log("you can vote")
// }
// else{
//     console.log("you can not voted")
// }
age >18 ? console.log("you can vote") : console.log("you cant voted")

let price = 500;
const mainLider = true;
// if(mainLider === true){
//     const discount = price /2;
//     const payAmount = price - discount;
//     console.log(payAmount)
// }
// else{
//     console.log(price)
// }
mainLider === true ? console.log("for free") : console.log(price)
let price1 = 500;
const isLider = true;
if(isLider === true){
    price1 = 0;
}
else{
    price1 = price1 + 100;
}
// console.log(price1)
price1 = isLider === true ? 0 : price1 + 100;