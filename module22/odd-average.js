function oddAverege(numbers){
    const odds = [];
    for( const number of numbers){
        if(number % 2 === 0){
            // console.log(number)
            odds.push(number)
        }
    }
    console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count)
    const avg = sum / count;
    return avg;
}
const numbers = [42, 13, 58, 65,81, 96, 7];
const avg = oddAverege(numbers);
console.log(avg)