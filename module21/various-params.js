function doubleOrTruple(number, double){
    if(double === true){
        const result = number * 2;
        return result;
    }
    else{
        const result =number * 3;
        return result;
    }
}
console.log(doubleOrTruple(15, true));
console.log(doubleOrTruple(-15, false));

function evenSizeString(str){
    const size = str.length;
    console.log(str, size);
    if(size === 0){
        console.log('even size')
    }
    else{
        console.log('odd size')
    }

}
evenSizeString('sylhet');
evenSizeString('bahubal');
 
function numberOfElements(numbers){
    const len = numbers . length;
    console.log(len)
    return len;
}
numberOfElements([12, 23, 45, 67,56])