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
    else if(year % 100 ===0 && year % 400 === 0){
        return true;

    }
    else{
        return false;
    }
}
const islear1 = isLearyear2(2025);
const islear2 = isLearyear2(2022);
const islear3 = isLearyear2(2019);
const islear4 = isLearyear2(2018);
console.log('hello world',islear1, islear2, islear3, islear4);