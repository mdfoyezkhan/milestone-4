const today = new Date();
const date = new Date('2025-10-9');
console.log(date);
console.log(date.getMonth())
console.log(date.getDay())
const specificDate = new Date(2027, 2, 27)
console.log(specificDate)
specificDate.setMonth(10)
console.log(specificDate.toLocaleString('en-GB'))