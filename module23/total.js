const products =[
    {nam:'apple', price: 120},
    {nam:'apple', price: 220},
    {nam:'apple', price: 70},
    {nam:'apple', price: 520}
];
function getTotalPrice(total){
    let min = 0;
    for(const totals of total){
        min = min + totals.price;
    }
    return min;
}
const getTotalPrices =getTotalPrice(products);
console.log('this is total price:', getTotalPrices)