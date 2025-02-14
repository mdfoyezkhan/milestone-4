const prices = [12000, 20000, 35000, 10000, 50000, 70000, 5000];

function getMin(number){
    let min =number[0];
    for(const num of number){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const minNumber = getMin(prices);
console.log('most lowest price:',minNumber)