const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const number = [1, 5, 61, 5, 87, 7, 5, 81, 61];
function noDuplicate(array){
    const unique = [];
    console.log(array)
    for(const items of array){
        if( unique.includes(items) === false){
            unique.push(items)
        }
    }
    return unique;
}
const uniquearray = noDuplicate(number)
console.log(uniquearray)