const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers)
// numbers.reverse()
// console.log(numbers)
// const numReve = numbers.reverse();
// console.log(numReve)
const revNumber =[];
for(const num of numbers){
    console.log(num)
    revNumber.unshift(num);
}
console.log(revNumber)
const reversesNumber =[]
for(let y = numbers.length -1; y >= 0; y--){
    const z =numbers[y];
    console.log(z)
    reversesNumber.push(z)
}
console.log(reversesNumber)