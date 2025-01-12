// for(let i = 1; i <= 30; i++){
//     if(i % 5 ===1){
//         console.log(i)
//     }
    
// }
for (let n = 0; n <= 30; n++){
    if(n % 10 ===1){
        console.log('hello world',n)
    }
}
let total = 10;
for(m = 1; m <= 100; m++){
    if(m % 20 === 1){
        console.log('how are you all', m)
        total = total + m;
        console.log("total amount", total)
    }
}
console.log('invest amount', total)