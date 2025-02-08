function sumNumbers(number){
  let sum = 0;
  for(const numbers of number ){
    console.log(number)
    sum = sum + number;
  }
  return sum;
}
const number = [5, 3, 7, 10];
const sum =sumNumbers(number);
console.log('this is total number', sum)


function foyejKhan(num){
  let sum = 0;
  for(const foyej of num ){
    console.log(num)
    const fKhan = sum + num;
  }
  return sum;
}
const numbs = [10, 15, 20, 30];
const fKhan =foyejKhan(numbs);
console.log('hello world',fKhan)
console.log('how are you all',fKhan)
