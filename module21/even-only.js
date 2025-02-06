function onlyEvenNumbers(numbers){
    let evens =[];
    for(const number of numbers){
        console.log(number)
        if(number %2 === 0){
            console.log(number)
            evens.push(number);
            return evens;
        }   
    }
    return evens;
}
const numbers =[11, 23, 31, 39]
onlyEvenNumbers(numbers)