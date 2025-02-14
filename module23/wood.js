function woodQuantity(chair, table, bed){
    const chairNumber = 4;
    const tableNumber = 5;
    const bedNumber = 2;
    const chairTotalWood = chair * chairNumber;
    const tableTotalWood = table * tableNumber;
    const bedTotalNumber = bed * bedNumber;
    const totalKat = chairTotalWood + tableTotalWood + bedTotalNumber;
    return totalKat;
}
const wood = woodQuantity(7, 4, 1)
console.log(wood)