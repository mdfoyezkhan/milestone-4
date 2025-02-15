function discountPrice(quentity){
    if(quentity <= 100){
        const total = quentity * 100;
        return total;
    }
    else if(quentity <= 200){
        const total = quentity * 90;
        return total;
    }
    else{
        const total = quentity * 70;
        return total;
    }
}
const getDiscountPrice = discountPrice(230);
console.log(getDiscountPrice)