function onlyEvenNumbers(numbers){
    let sum =0;
    for(const number of numbers){
        console.log(number)
        if(number %2 === 0){
            console.log(number)
            sum = sum + number;
        }   
    }
    return sum;
}
const numbers =[11, 23, 31, 39]
onlyEvenNumbers(numbers)