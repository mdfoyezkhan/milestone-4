const number = 20;
if (number <= 30){
    const discount = number * 10 / 100;
    const payAmount = number - discount;
    console.log(payAmount)

}
else if(number >=15 ){
    const discount = number * 5 / 100;
    const payAmount =number - discount;
    console.log(payAmount)
}

else{
    console.log(number)
}
