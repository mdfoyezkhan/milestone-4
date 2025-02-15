function layeredDiscountPrice(quentity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    if(quentity <= 100){
        const total = quentity * first100Price;
        return total;
    }
    else if(quentity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuentity = quentity - 100;
        const remainingTotal = quentity * second100Price;
        const total = remainingTotal + first100Total;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuentity = quentity - 200;
        const remainingTotal = remainingQuentity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    } 
}
const getDiscountPrice = layeredDiscountPrice(201);
console.log(getDiscountPrice);