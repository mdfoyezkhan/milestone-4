function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}
const result = multiply(5, 'seven')
console.log(result)
//---------
function fullName(first, second){
    if(typeof first !== 'string'){
        return 'first Name should be string';
    }
    else if(typeof second !== 'string'){
        return 'second Name should be string'
    }
    const fName = first + ' ' + second;
    return fName;
}
const result1 =fullName('foyej khan', 7);
console.log(result1)
//-----------
function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please provide an object';
    }
    const price =product.price;
    return price;
}
const price =getPrice({name:'dell',price:50000,color:'black'})
// const price = getPrice(5)
console.log(price)

function getSecond(numbers){
    if(Array.isArray(numbers) == false){
        return 'Please provide an array'
    }
    const second= numbers[1];
    return second;
}
const second =getSecond(12);
console.log(second)