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