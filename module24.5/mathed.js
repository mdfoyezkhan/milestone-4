const numbers = [11, 22, 33, 44, 55];
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number)
}
for(const number of numbers){
    console.log(number)
}
const products =[
    {id:1, name:'xiami1 phone one night', price:19000},
    {id:2, name:'xiami2  one night', price:19000},
    {id:3, name:'xiami3 Phone one night', price:19000},
    {id:4, name:'xiami4 phone one night', price:19000},
    {id:5, name:'xiami5 phone one night', price:19000},
    {id:6, name:'xiami6 one night', price:19000},
    {id:7, name:'xiami7 Phone one night', price:19000},
];

// for(const product of products){
//     console.log(product)
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        // console.log(product.name.includes(search))
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'Phone')
console.log(result)
