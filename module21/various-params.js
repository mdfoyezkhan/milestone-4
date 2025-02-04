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

}
evenSizeString('sylhet');
