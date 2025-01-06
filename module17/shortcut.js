const price = 400;
if (price < 500){
    const discount = price /2;
    const payAmount = price - discount;
    console.log(payAmount)
}
else{
    console.log(price);
}