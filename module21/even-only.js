function onlyEvenNumbers(numbers){
    for(const number of numbers){
        console.log(number)
        if(number %2 === 0){
            console.log(number)
        }
        else{
            console.log('this number is not even number')
        }
    }
}
const numbers =[11, 23, 31, 40]
onlyEvenNumbers(numbers)