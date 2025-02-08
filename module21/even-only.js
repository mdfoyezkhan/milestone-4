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
const numberss =[11, 23, 31, 39]
const results = onlyEvenNumbers(numberss)
console.log('this is only for even numbers', results)

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
const numbers =[12, 14, 50, 60]
const result = onlyEvenNumbers(numbers)
console.log('this is only for even numbers', result)