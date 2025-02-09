function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const foyejKhanHight = inchToFeet(64);
console.log(foyejKhanHight)

function foyejKhanHightSecend(fInch){
    const feetFraction = fInch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchFraction = fInch % 12;
    const feetAndInch = feetFraction + 'feet' + inchFraction +'inch';
    return feetAndInch;
    
}
const result = foyejKhanHightSecend(75);
console.log(result);

function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
