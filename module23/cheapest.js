const prices =[
    {nam: 'samsung', price: 30000, camera: '50mp', color: 'black'},
    {nam: 'oppo', price: 20000, camera: '50mp', color: 'black'},
    {nam: 'nokea', price: 50000, camera: '50mp', color: 'black'},
    {nam: 'lg', price: 10000, camera: '50mp', color: 'black'},
    {nam: 'iphone', price: 100000, camera: '50mp', color: 'black'}
];
function getCheapestPrice(price){
    let lowestPrice = price[0];
    for(const price of prices){
        if(price.price < lowestPrice.price){
            lowestPrice = price ;
        }
    }
    return lowestPrice;
}
const cheapestPrice = getCheapestPrice(prices);
console.log(cheapestPrice)