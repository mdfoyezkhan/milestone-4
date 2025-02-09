function leapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const leapi = leapYear(2025);
console.log(leapi)