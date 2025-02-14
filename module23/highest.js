const price = [
    {nan:'samsung', price: 30000, camera: '100mp', color: 'blue'},
    {nan:'relme', price: 34000, camera: '100mp', color: 'blue'},
    {nan:'iphone', price: 120000, camera: '100mp', color: 'blue'},
    {nan:'wolton', price: 23000, camera: '100mp', color: 'blue'},
    {nan:'oppo', price: 70000, camera: '100mp', color: 'blue'}
];
function gethighestPrice(prices){
    let max =prices[0];
    for(const price of prices){
        if(price.price > max.price){
            max = price;
        }
    }
    return max;
}
const getingPrice = gethighestPrice(price);
console.log('this is highest price phone:',getingPrice)