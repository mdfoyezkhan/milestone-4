const sentence ='i ma learning web dev.';
let reverse =''
console.log(sentence)
for(const letter of sentence){
    // console.log(letter)
    reverse =letter + reverse;
}
console.log(reverse)