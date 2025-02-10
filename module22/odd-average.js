function oddAverege(numbers){
    for( const number of numbers){
        if(number % 2 === 0){
            console.log(number)
        }
    }
}
const numbers = [42, 13, 58, 65,81, 96, 7];
const avg = oddAverege(numbers);
console.log(avg)