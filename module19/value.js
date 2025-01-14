const person = {
    name:'foyej khan',
    age:22,
    profession:'web developer',
    salary:25000,
    married:false,
    'my work':['usa','dubai', 'canada', 'london']
}
console.log(person)
person.salary = 35000;
person['age'] = 25;
person['my work']=['dhaka', 'sylhet', 'rajshahi']
console.log(person.salary)
console.log(person.age)
console.log(person['my work'])
const propName = 'propession';
person[propName]= 'devops'
console.log(person)
