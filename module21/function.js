function productList(){
    console.log('this is new product')
}
productList()
function productPrice(){
    const price = 50;
    if(price>= 60){
        console.log('this is for you')
    }
    else if(price>=52){
        console.log('this the main price')
    }
    else{
        console.log(price)
    }
}
productPrice()