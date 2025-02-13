const heights =[12, 99, 23, 45, 67, 89, 90]
function maxSonka(number){
    let max = number[0]
for(const num of number){
    if(num > max){
        max = num
    }
}
return max;
}
const max = maxSonka(heights);
console.log('max value is',max)

//----------------
const foyej = [12, 13, 14, 34, 56, 78, 37]
function minNumber(num){
    let min =num[0];
    for(const nam of num){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const minNumbers = minNumber(foyej);
console.log('this is min number', minNumbers)