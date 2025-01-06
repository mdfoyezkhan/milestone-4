const age = 45;
const price = 500;
if(age <= 20){
    console.log("you can eat for free")
}
else if (age >= 40){
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if(age >=60){
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else {
    console.log(price)
}