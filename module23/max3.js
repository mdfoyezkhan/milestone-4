const foyej = 857;
const emon = 787;
const salman = 89;
if(foyej > emon && foyej > salman){
    console.log('foyej will be a developer');
}
else if(emon > foyej && emon > salman){
    console.log('emon will be a developer');
}
else{
    console.log('salman will be a developer');
}
function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}
const maxOfNumber = maxOfThree(555, 777, 999);
console.log('max of number',maxOfNumber);

// function maxNumber(num4, num5, num6){

// }
const maxNumbers =Math.max (12, 13, 45, 56, 766);
console.log(maxNumbers)