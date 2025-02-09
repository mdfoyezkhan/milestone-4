function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const foyejKhanHight = inchToFeet(64);
console.log(foyejKhanHight)

function foyejKhanHightSecend(fInch){
    const feetFraction =fInch / 12;
    const inchFraction = fInch % 12;
    const feetAndInch = feetFraction + inchFraction;
    return feetAndInch;
    
}
const result = foyejKhanHightSecend(64);
console.log(result);