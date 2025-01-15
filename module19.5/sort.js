const person = ['rakib', 'nokib', 'sakib', 'akib', 'dakib']
const sortPerson = person.sort()
console.log(sortPerson)
const numbers =[1, 5, 4, 22, 8, 2, 34, 41]
const numbersAsc =[...numbers].sort(function(a, b){return a -b});
const numbersDsc = [...numbers].sort(function(a, b){return b - a})
console.log(numbersAsc)
console.log(numbersDsc)