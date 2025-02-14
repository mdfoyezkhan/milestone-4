const products =[
    {nam:'apple', price: 120, quentity: 4},
    {nam:'komola', price: 220, quentity: 7},
    {nam:'pepe', price: 70, quentity: 5},
    {nam:'kola', price: 520, quentity: 2}
]
function soppingCost(products){
    let total = 0;
    for(const product of products){
        const shoppingTotalCost = product.price * product.quentity;
        total = total + shoppingTotalCost;
    }
    return total;
}
const totalCost = soppingCost(products);
console.log(totalCost)