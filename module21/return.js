function tenTimes(number){
    const result = number * 10;
    return result;

}
tenTimes(5);
const output = tenTimes(5);
console.log('output',output)

function cutHalf(number){
    const hulf = number / 2;
    return hulf;

}
cutHalf(50)
const diff =cutHalf(50);
console.log(diff)

function jugfol(price){
    const result = price + 50;
    return result;
}
jugfol(50)
const jug = jugfol(50);
console.log('output',jug)
function prices(price1, price2){
    const result = price1 + price2;
    return result;
}
console.log(prices(40, 60));
function bajurNumber(number1,number2){
    const nam1 = number1 + number2;
    const diff = number1 - number2;
    const dibid = nam1 / diff;
    return dibid;
}
console.log(bajurNumber(5, 2));
function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    else{
        return false;
    }
}
console.log(isOdd(51))