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
// const nameList = ['foyej khan', 'emon khan' , 'salman khan', ];
// console.log(nameList)
const numberList =[12, 13, 14, 15, 16]
console.log(numberList)

const listName2 = ['foyej khan', 'emon khan' , 'salman khan', 'parvej khan', 'afzal khan' ];
console.log(listName2 [0])
console.log(listName2.length)
const listName3 = listName2[4]
console.log(listName3)
