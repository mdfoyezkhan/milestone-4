const mobile ={
    brand:'sunsung',
    price:20000,
    color:'black',
    camera:'12mp',
    inNew:'true'
}
for(const prop in mobile){
    console.log(prop)
    console.log(mobile[prop])
}
const keys =Object.keys(mobile);
console.log(keys)
for(const key of keys){
   console.log(key, ':',mobile[key])
}