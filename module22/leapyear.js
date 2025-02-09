function leapYear(year){
    if(year % 5 === 0){
        return true;
    }
    else{
        return false;
    }
}
const leapi = leapYear(2025);
console.log(leapi)

function isLearyear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const islear = isLearyear2(2025);
console.log('hello world',islear);